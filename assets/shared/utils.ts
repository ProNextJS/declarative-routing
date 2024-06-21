import { z } from "zod";

export function safeParseSearchParams<T extends z.AnyZodObject>(schema: T, searchParams: URLSearchParams): Partial<z.infer<T>> {
    type ParsedData<T> = { error: string; data?: undefined; } | { data: T; error?: undefined }
    type ParsedArrayData<T> = { error: string; data?: undefined; } | { data: T[]; error?: undefined }
    
    const paramsArray = getSearchParamsAsArrayRecord(searchParams)

    const shape = schema.shape;
    const parsed: Record<string, any> = {};

    for (const key in shape) {
        if (shape.hasOwnProperty(key)) {
            const fieldSchema: z.ZodTypeAny = shape[key];
            if (paramsArray[key]) {
                const fieldData = convertToRequiredType(paramsArray[key], fieldSchema)

                if (fieldData.error) {
                    console.info(key, fieldData.error)
                    continue;
                }

                const result = fieldSchema.safeParse(fieldData.data!);
                if (result.success) parsed[key] = result.data;
            }
        }
    }
    return parsed;

    function getSearchParamsAsArrayRecord(searchParams: URLSearchParams): Record<string, string[]> {
        const params: Record<string, string[]> = {};

        searchParams.forEach((value, key) => {
            if (!params[key]) {
                params[key] = [];
            }
            params[key].push(value);
        });

        return params;
    }
    
    function convertToRequiredType(values: string[], schema: z.ZodTypeAny): ParsedArrayData<any> | ParsedData<any> {
        if (schema instanceof z.ZodOptional) {
            schema = schema._def.innerType
        }
        if (values.length > 1 && !(schema instanceof z.ZodArray))
            return { error: "Multiple values for non-array field" }

        switch (schema.constructor) {
            case z.ZodNumber: return parseNumber(values[0])
            case z.ZodBoolean: return parseBoolean(values[0])
            case z.ZodString: return { data: values[0] }
            case z.ZodArray: {
                const elementSchema = schema._def.type;
                switch (elementSchema.constructor) {
                    case z.ZodNumber: return parseArray(values, parseNumber)
                    case z.ZodBoolean: return parseArray(values, parseBoolean)
                    case z.ZodString: return { data: values };
                    default: return { error: "unsupported array element type " + String(elementSchema.constructor) }
                }
            }
            default: return { error: "unsupported type " + String(schema.constructor) }
        }
    }

    function parseNumber(str: string): ParsedData<number> {
        const num = +str
        return isNaN(num) ? { error: `${str} is NaN` } : { data: num }
    }

    function parseBoolean(str: string): ParsedData<boolean> {
        switch (str) {
            case "true": return { data: true };
            case "false": return { data: false };
            default: return { error: `${str} is not a boolean` };
        }
    }



    function parseArray<T>(values: string[], parseFunction: (str: string) => ParsedData<T>): ParsedArrayData<T> {
        const numbers = values.map(parseFunction)
        const error = numbers.find(n => n.error)?.error
        if (error) return { error }
        return { data: numbers.map(n => n.data!) }
    }

}

