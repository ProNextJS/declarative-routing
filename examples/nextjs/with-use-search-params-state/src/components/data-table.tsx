"use client";
import {
  type ColumnDef,
  flexRender,
  type Row,
  type SortDirection,
  type Table as TableType,
  type useReactTable,
  type ColumnMeta,
} from "@tanstack/react-table";
import { type JSX, useCallback, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDebounceCallback } from "@/hooks/use-debounced-callback";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

import {
  ArrowDownUpIcon,
  FilterIcon,
  type LucideProps,
  MoveDownIcon,
  MoveLeftIcon,
  MoveRightIcon,
  MoveUpIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

type TableSelectionRowProps = {
  selectionVisibility?: "alwaysVisible" | "shownOnlyOnHover";
};
export type UseReactTableProps<TData extends Record<string, unknown>> =
  Parameters<typeof useReactTable<TData>>[0];

const getIconBySortDir = (
  sortDir: SortDirection | false,
): ((props: LucideProps) => JSX.Element) => {
  switch (sortDir) {
    case "asc": {
      return function AscIcon({ className, ...props }: LucideProps) {
        return (
          <MoveUpIcon
            className={cn("text-cubic-blue h-4 w-4", className)}
            {...props}
          />
        );
      };
    }
    case "desc": {
      return function DescIcon({ className, ...props }: LucideProps) {
        return (
          <MoveDownIcon
            className={cn("text-cubic-blue h-4 w-4", className)}
            {...props}
          />
        );
      };
    }
    default: {
      return function NonSortedIcon({ className, ...props }: LucideProps) {
        return (
          <ArrowDownUpIcon
            className={cn("h-4 w-4 text-neutral-200", className)}
            {...props}
          />
        );
      };
    }
  }
};
type BaseDataTableProps = {
  isLoading?: boolean;
  fetchNextPage?: () => void;
  size?: "sm" | "md";
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  nextPageSize?: number;
  className?: string;
};
export type DataTableProps<TData extends Record<string, unknown>> =
  BaseDataTableProps & {
    table: TableType<TData>;
    onRowClick?: (row: Row<TData>) => void;
  } & Pick<UseReactTableProps<TData>, "onRowSelectionChange"> &
    TableSelectionRowProps;

/**
 * DataTable component for displaying tabular data with pagination and sorting.
 *
 * @remarks
 * If the TableFooter or other parts of the DataTable component are not visible,
 * adding 'overflow-hidden' to the direct parent of this component might resolve the issue.
 * This is often necessary in page layouts, such as in @page.tsx files.
 */
export function DataTable<
  TData extends Record<string, unknown> = Record<string, unknown>,
  TValue = unknown,
>({
  table,
  isLoading = false,
  fetchNextPage: nonDebouncedFetchNextPage = () => void 0,
  hasNextPage,
  nextPageSize = 5,
  isFetchingNextPage = false,
  size = "md",
  className,
  onRowClick,
  selectionVisibility = "shownOnlyOnHover",
}: Readonly<DataTableProps<TData>>) {
  const columns = table.getAllColumns().map((column) => {
    if (column.id === "select") {
      return {
        ...column,
        columnDef: DataTable.getSelectColumnDef({ selectionVisibility }),
      };
    }
    return column;
  });

  const rows = table.getRowModel().rows;
  const lastRowRef = useRef<HTMLTableRowElement>(null);

  const fetchNextPage = useDebounceCallback(nonDebouncedFetchNextPage, {
    delay: 500,
    debounceOrThrottle: "throttle",
  });
  const entry = useIntersectionObserver({ elementRef: lastRowRef });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && fetchNextPage) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting, hasNextPage, fetchNextPage]);
  const renderRows = useCallback(() => {
    if (isLoading && rows.length === 0) {
      return (
        <>
          {Array.from({ length: nextPageSize }).map((_, index) => (
            <React.Fragment key={`skeleton-row-${index}`}>
              <TableRow className="grow-0">
                {columns.map((column) => {
                  const columnSize = column.getSize();
                  return (
                    <TableCell
                      key={`skeleton-cell-${column.id}`}
                      className={cn(
                        "h-8",
                        "px-2 py-0",
                        columnSize ? "" : "w-full",
                      )}
                    >
                      <Skeleton className="h-8 w-full" />
                    </TableCell>
                  );
                })}
              </TableRow>
              <TableRowSeparator
                colSpan={columns.length}
                isVisible={index < nextPageSize - 1}
                size={size}
              />
            </React.Fragment>
          ))}
        </>
      );
    }
    if (rows.length === 0) {
      return (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            className={cn("h-24 text-center", "px- py-1")}
          >
            No results.
          </TableCell>
        </TableRow>
      );
    }
    return rows.map((row, index) => {
      const isLastRow = index === rows.length - 1;

      return (
        <React.Fragment key={row.id}>
          <TableRow
            data-state={row.getIsSelected() && "selected"}
            className={cn(
              "grow-0",
              "group",
              className,
              onRowClick && "cursor-pointer",
            )}
            ref={isLastRow ? lastRowRef : undefined}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
          >
            {row.getVisibleCells().map((cell) => {
              const columnSize = cell.column.getSize();

              const style = {
                minWidth: columnSize,
                width: columnSize,
                maxWidth: columnSize,
              };
              return (
                <TableCell
                  key={cell.id}
                  className={cn(
                    "px-auto h-8 font-normal",
                    "px-2 py-0",
                    size === "sm" && "py-1",
                  )}
                  style={style}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
          <TableRowSeparator
            colSpan={columns.length}
            isVisible={!isLastRow}
            size={size}
          />
        </React.Fragment>
      );
    });
  }, [columns, isLoading, nextPageSize, rows, size, onRowClick, className]);
  return (
    <Table
      sticky={true}
      className={cn("border-separate border-spacing-y-0", "table-fixed")}
      wrapperClassName={cn(
        "flex max-h-full h-max w-full overflow-auto",
        className,
      )}
    >
      <TableHeader className="top-0 z-10 flex-none cursor-default border border-b bg-white hover:bg-white">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const canSort = header.column.getCanSort();
              const SortingIcon = getIconBySortDir(header.column.getIsSorted());

              const cellContent = flexRender(
                header.column.columnDef.header,
                header.getContext(),
              );
              const columnSize = header.column.getSize();
              const style = {
                width: columnSize,
                minWidth: columnSize,
                maxWidth: columnSize,
              };
              const { columnFiltersConfig } =
                (header.column.columnDef.meta as ColumnMeta<TData, unknown>) ??
                {};

              return (
                <TableHead
                  key={header.id}
                  className={cn(
                    "px-2",
                    size === "sm" ? "h-8" : "h-12",
                    size === "sm" ? "text-xs" : "",
                  )}
                  style={style}
                >
                  <div
                    className={cn(
                      "flex w-full flex-row items-center gap-1 font-normal whitespace-nowrap",

                      // "px-1",
                      canSort ? "cursor-pointer select-none" : "",
                    )}
                    style={style}
                  >
                    {cellContent}
                    {columnFiltersConfig && (
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0"
                          >
                            <FilterIcon className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="relative w-56">
                          <div className="absolute top-1 right-1 cursor-pointer">
                            <Trash2Icon
                              className="h-4 w-4"
                              onClick={() => {
                                columnFiltersConfig.onFilterSelectionChange([]);
                              }}
                            />
                          </div>

                          <div className="p-4">
                            {columnFiltersConfig.availableFilters.map(
                              (filter) => {
                                const isSelected =
                                  columnFiltersConfig.selectedFilters.includes(
                                    filter,
                                  );

                                return (
                                  <div
                                    key={filter}
                                    className="flex items-center space-x-2 p-1"
                                  >
                                    <Checkbox
                                      id={filter}
                                      checked={isSelected}
                                      onCheckedChange={(checked) => {
                                        if (checked === true) {
                                          return columnFiltersConfig.onFilterSelectionChange(
                                            [
                                              ...columnFiltersConfig.selectedFilters,
                                              filter,
                                            ],
                                          );
                                        }
                                        if (checked === false) {
                                          return columnFiltersConfig.onFilterSelectionChange(
                                            columnFiltersConfig.selectedFilters.filter(
                                              (f) => f !== filter,
                                            ),
                                          );
                                        }
                                      }}
                                    />
                                    <Label
                                      htmlFor={filter}
                                      className="font-normal"
                                    >
                                      {filter}
                                    </Label>
                                  </div>
                                );
                              },
                            )}
                          </div>
                        </PopoverContent>
                      </Popover>
                    )}
                    {canSort && (
                      <Button
                        variant="ghost"
                        size={"icon"}
                        onClick={() => header.column.toggleSorting()}
                      >
                        <SortingIcon />
                      </Button>
                    )}
                  </div>
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="flex-1 overflow-clip">
        {renderRows()}
        {isFetchingNextPage &&
          Array.from({ length: nextPageSize }).map((_, index) => {
            const isLastRow = index === nextPageSize - 1;

            return (
              <React.Fragment key={`skeleton-row-fetching-next-page-${index}`}>
                <TableRow className="grow-0">
                  {columns.map((column) => {
                    const columnSize = column.getSize();
                    return (
                      <TableCell
                        key={`skeleton-cell-${column.id}`}
                        className={cn(
                          "h-8 font-normal",
                          "px-2 py-0",
                          columnSize ? "" : "w-full",
                        )}
                      >
                        <Skeleton className="h-8 w-full" />
                      </TableCell>
                    );
                  })}
                </TableRow>
                <TableRowSeparator
                  colSpan={columns.length}
                  isVisible={!isLastRow}
                  size={size}
                />
              </React.Fragment>
            );
          })}
      </TableBody>
    </Table>
  );
}

const noop = () => void 0;
export const DataTablePagination = ({
  hasNext,
  hasPrevious,
  onNext = noop,
  onPrevious = noop,
  totalPages = 1,
  currentPage = 1,
}: {
  hasNext?: boolean;
  hasPrevious?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  totalPages?: number;
  currentPage?: number;
}) => {
  return (
    <div className="flex w-full flex-row justify-center gap-2">
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrevious}
          disabled={!hasPrevious}
        >
          <MoveLeftIcon />
        </Button>
        <div className="flex items-center gap-2">
          <span>{currentPage}</span>
          <span>/</span>
          <span>{totalPages}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={!hasNext}
        >
          <MoveRightIcon />
        </Button>
      </div>
    </div>
  );
};

DataTable.getSelectColumnDef = <TData extends Record<string, unknown>>({
  selectionVisibility = "shownOnlyOnHover",
  disableRowSelection = false,
}: {
  selectionVisibility?: "alwaysVisible" | "shownOnlyOnHover";
  disableRowSelection?: boolean;
} = {}): ColumnDef<TData> => {
  return {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        disabled={disableRowSelection}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    size: 50,
    cell: ({ row, table }) => {
      const hasSelectedRows = table.getState().rowSelection
        ? Object.values(table.getState().rowSelection).some(Boolean)
        : false;

      return (
        <div
          className={cn(
            selectionVisibility === "shownOnlyOnHover" &&
              !hasSelectedRows &&
              "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
            "transition-opacity duration-200",
          )}
        >
          <Checkbox
            checked={row.getIsSelected() && row.getCanSelect()}
            disabled={!row.getCanSelect()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Toggle row selection"
          />
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  };
};

const TableRowSeparator = ({
  colSpan,
  isVisible,
  size,
}: {
  colSpan: number;
  isVisible: boolean;
  size: DataTableProps<Record<string, unknown>>["size"];
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <tr className={cn("h-3", size === "sm" && "h-1")}>
      <td colSpan={colSpan} className="">
        <div className="flex h-full w-full items-center justify-center">
          <div className="pointer-events-none h-[1px] w-full cursor-default bg-gray-200" />
        </div>
      </td>
    </tr>
  );
};
export const selectedItemsSplitter = "_";
