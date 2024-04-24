import { component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "~/lib/utils";

type InputProps = PropsOf<"input">;

export const Input = component$<InputProps>(
  ({
    name,
    "bind:value": valueSig,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    "bind:checked": checkedSig,
    ...props
  }) => {
    return (
      <input
        {...props}
        bind:value={valueSig}
        class={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          props.class,
        )}
        id={name}
      />
    );
  },
);
