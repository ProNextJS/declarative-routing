import type { RowData } from "@tanstack/react-table";

type ColumnFiltersConfig = {
  availableFilters: string[];
  selectedFilters: string[];
  onFilterSelectionChange: (filters: string[]) => void;
};

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    columnFiltersConfig?: ColumnFiltersConfig;
  }
}
