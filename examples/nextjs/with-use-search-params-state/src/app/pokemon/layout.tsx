"use client";
import { DataTable, DataTablePagination } from "@/components/data-table";
import Image from "next/image";
import { PokemonTypeBadge } from "@/components/pokemon-type-badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Pokemon, PokemonId } from "@/routes";
import { useParams, useSearchParamsState } from "@/routes/hooks";
import { asPokemonTypesNamesArr, pokemonTypeNamess } from "@/schemas/pokemon";
import { api, type RouterInputs, type RouterOutputs } from "@/trpc/react";
import {
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnSort,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const PokemonListLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { id: selectedPokemonId } = useParams(PokemonId, {
    partial: true,
  });
  const {
    searchParams,
    setSearchParams: setSearchParamsInLayout,
    debouncedSetSearchParams: debouncedSetSearchParamsInLayout,
  } = useSearchParamsState(Pokemon, { partial: true });
  const {
    setSearchParams: setSearchParamsInDetails,
    debouncedSetSearchParams: debouncedSetSearchParamsInDetails,
  } = useSearchParamsState(PokemonId, { partial: true });

  const debouncedSetSearchParams = useCallback<
    typeof debouncedSetSearchParamsInDetails
  >(
    (params) => {
      if (selectedPokemonId) {
        return debouncedSetSearchParamsInDetails(params);
      }
      return debouncedSetSearchParamsInLayout(params);
    },
    [
      selectedPokemonId,
      debouncedSetSearchParamsInDetails,
      debouncedSetSearchParamsInLayout,
    ],
  );

  const setSearchParams = useCallback<typeof setSearchParamsInDetails>(
    (params) => {
      if (selectedPokemonId) {
        return setSearchParamsInDetails(params);
      }
      return setSearchParamsInLayout(params);
    },
    [selectedPokemonId, setSearchParamsInDetails, setSearchParamsInLayout],
  );
  const [sorting, setSorting] = useState<ColumnSort[]>(() => {
    const initialSort = searchParams.orderBy
      ? [
          {
            id: searchParams.orderBy,
            desc: searchParams.order === "desc",
          },
        ]
      : [];
    return initialSort;
  });
  const queryInput = useMemo(() => {
    return {
      order: searchParams.order,
      pageSize: 10,
      searchValue: searchParams.searchValue,
      cursor: searchParams.cursor,
      types: searchParams.types,
    } as const satisfies RouterInputs["pokemon"]["list"];
  }, [searchParams]);
  const {
    data: pokemonList,
    isLoading,
    isFetching,
  } = api.pokemon.list.useQuery(queryInput);
  const columns = useMemo<
    ColumnDef<RouterOutputs["pokemon"]["list"]["items"][number]>[]
  >(
    () => [
      {
        header: "Id",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Thumbnail",
        accessorKey: "thumbnailUrl",
        enableSorting: false,
        cell: ({ row }) => {
          if (!row.original.thumbnailUrl) {
            return "?";
          }
          return (
            <Image
              src={row.original.thumbnailUrl}
              alt={row.original.name}
              width={40}
              height={40}
            />
          );
        },
      },
      {
        header: "Types",
        accessorKey: "types",
        enableSorting: false,
        meta: {
          columnFiltersConfig: {
            availableFilters: pokemonTypeNamess,
            onFilterSelectionChange: (filters) => {
              setSearchParams({
                types: asPokemonTypesNamesArr(filters),
                cursor: null,
              });
            },
            selectedFilters: searchParams.types,
          },
        },
        cell: ({ row }) => {
          return (
            <div className="flex flex-row gap-2">
              {row.original.types.map((type) => (
                <PokemonTypeBadge key={type} type={type} />
              ))}
            </div>
          );
        },
      },
    ],
    [searchParams.types, setSearchParams],
  );
  const table = useReactTable({
    data: pokemonList?.items ?? [],
    columns,
    state: {
      sorting,
    },
    onSortingChange: (valueOrUpdatedFn) => {
      setSorting((before) => {
        const sortingsAfter =
          typeof valueOrUpdatedFn === "function"
            ? valueOrUpdatedFn(before)
            : valueOrUpdatedFn;
        const firstSortingAfter = sortingsAfter.at(0);
        if (!firstSortingAfter) {
          setSearchParams({
            order: "asc",
            orderBy: "name",
            cursor: 0,
          });
          return sortingsAfter;
        }
        setSearchParams({
          order: firstSortingAfter.desc ? "desc" : "asc",
          orderBy: firstSortingAfter.id as "name",
          cursor: 0,
        });
        return sortingsAfter;
      });
    },

    getCoreRowModel: getCoreRowModel(),
  });

  const screenSplitStrategy = useMemo((): "only list" | "list and details" => {
    if (selectedPokemonId) {
      return "list and details";
    }
    return "only list";
  }, [selectedPokemonId]);

  return (
    <div
      className={cn(
        "flex h-full flex-1 flex-row items-stretch gap-2 overflow-hidden",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full flex-1 translate-x-0 flex-col items-stretch gap-2 overflow-hidden rounded-lg border p-4 opacity-100 transition-all duration-300",
          screenSplitStrategy === "list and details" && "w-[60%]",
          screenSplitStrategy === "only list" && "w-full",
        )}
      >
        <span>Pokemon List</span>
        <div className="mt-4 flex items-center justify-between gap-4">
          <Input
            defaultValue={searchParams.searchValue}
            onChange={(e) =>
              debouncedSetSearchParams({
                searchValue: e.target.value,
                cursor: 0,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <DataTable
            table={table}
            className="w-full max-w-full"
            isLoading={isLoading || isFetching}
            onRowClick={(row) => {
              console.log({ row: row.original });
              const rowId = row.original.id;
              let newUrl = PokemonId({ id: row.original.id }, searchParams);
              if (selectedPokemonId === rowId) {
                newUrl = Pokemon({}, searchParams);
              }
              console.log({ newUrl, rowOriginal: row.original, row });
              router.push(newUrl);
            }}
          />
          <DataTablePagination
            hasNext={pokemonList?.hasNextPage}
            hasPrevious={pokemonList?.hasPreviousPage}
            onNext={() => {
              setSearchParams({ cursor: pokemonList?.nextCursor });
            }}
            onPrevious={() => {
              setSearchParams({ cursor: pokemonList?.previousCursor });
            }}
            totalPages={pokemonList?.pagesCount}
            currentPage={pokemonList?.currentPage}
          />
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-300",
          "h-full",
          screenSplitStrategy === "list and details" && "w-[40%]",
          screenSplitStrategy === "only list" && "w-0",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PokemonListLayout;
