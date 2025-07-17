import z, { type AnyZodObject } from "zod";

// import { OrderEnum } from "./create-paginated-response-validator";
export const OrderEnum = z.enum(["asc", "desc"]).optional();

const oldPaginationInputSchema = z.object({
  skip: z.coerce.number().default(0),
  limit: z.coerce.number().default(20),
});

const newPaginationInputSchema = z.object({
  pageSize: z.coerce.number().default(30),
});

export type BasePaginatedInput = z.infer<typeof basePaginatedInputSchema>;
const withCursorSchema = z.object({
  /**
   * NEEDED FOR INFINITE QUERIES / INFINTE SCROLLING // TREAT IT AS PAGE INDEX
   */
  cursor: z.coerce
    .number()
    .default(0)
    .describe("Treat it as pageIndex. It's required for infinite scrolling"),
  // .catch(() => {
  //   return {
  //     pageIndex: 0,
  //   };
  // }),
  // .optional()
  // .nullable()
  // .transform((val) => {
  //   if (val) {
  //     return val;
  //   }
  //   return {
  //     pageIndex: 0,
  //   };
  // }), // NEEDED FOR INFINITE QUERIES
});

export const generatePaginatedOutputSchema = <T extends AnyZodObject>({
  itemSchema,
}: {
  itemSchema: T;
}) =>
  z.object({
    items: itemSchema.array(),
    pagesCount: z.number(),
    currentPage: z.number().default(1),
    total: z.number(),
    nextCursor: z.number().optional(),
    previousCursor: z.number().optional(),
    hasNextPage: z.boolean(),
    hasPreviousPage: z.boolean(),
  });
export const basePaginatedInputSchema = z
  .object({
    order: OrderEnum.default("asc"),
    searchValue: z.string().optional(),
  })
  .merge(newPaginationInputSchema);

export const baseInfinitePaginatedInputSchema =
  basePaginatedInputSchema.merge(withCursorSchema);
export type BaseInfinitePaginatedInput = z.infer<
  typeof baseInfinitePaginatedInputSchema
>;

const newPaginationWithOptionalCursor =
  newPaginationInputSchema.merge(withCursorSchema);

export const convertNewToOldPagination = (
  input: z.infer<typeof newPaginationWithOptionalCursor>,
): z.output<typeof oldPaginationInputSchema> => {
  const { pageSize } = input;
  const pageIndex = input.cursor ?? 0;
  const skip = pageIndex * pageSize;
  const limit = pageSize;
  return { skip, limit };
};
