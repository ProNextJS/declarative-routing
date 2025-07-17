# Enhanced URL Search Parameter State Management

This example demonstrates the new **URL search parameter state management** features added to the declarative-routing library. These changes provide a React state-like interface for managing URL search parameters with automatic synchronization, debouncing, and type safety.

## Key Features & Changes

### 1. **New `useSearchParamsState` Hook** 🎯

The main addition is the `useSearchParamsState` hook, which provides a React state-like interface for URL search parameters:

```tsx
const {
  searchParams,           // Current search parameter values
  setSearchParams,        // Update search parameters (immediate)
  debouncedSetSearchParams, // Debounced version for real-time input
  resetAllValues          // Reset all search parameters to defaults
} = useSearchParamsState(routeBuilder, config?);
```

#### Configuration Options:

```tsx
useSearchParamsState(routeBuilder, {
  partial?: boolean; // Allow partial parameter parsing (default: false)
});
```

**Why the `config` parameter?**

- Since `useSearchParamsState` uses `useParams` internally, it needs to support the same configuration options
- The `partial: true` option is especially useful in layouts where you want to conditionally handle state based on parameter presence
- This ensures consistency across all the routing hooks

#### Key Behaviors:

- **`undefined` values**: Ignored (no change to URL)
- **`null` values**: Remove the parameter from URL
- **Empty strings**: For optional parameters, treated as removal
- **Automatic URL updates**: Changes immediately reflect in browser URL
- **Type safety**: Full TypeScript support with Zod schema validation

**Example Usage:**

```tsx
// Update search with debouncing (great for search inputs)
debouncedSetSearchParams({
  searchValue: e.target.value,
  cursor: 0, // Reset pagination
});

// Remove a filter
setSearchParams({
  types: null, // This removes 'types' from URL
});

// Conditional updates
setSearchParams({
  someFilter: shouldApplyFilter ? "value" : undefined, // Only updates if true
});
```

### 2. **Enhanced `useParams` with Partial Support** 🔧

#### The Problem:

In layouts, you often want to know if child routes are rendered without throwing errors. For example, in our Pokemon app:

- Children (Pokemon details) are displayed when `id` parameter is present
- Without `{partial: true}`, `useParams` throws an error if `id` is missing
- This prevents conditional styling/animations based on parameter presence

#### The Solution:

```tsx
const { id: selectedPokemonId } = useParams(PokemonId, {
  partial: true, // ✅ No error if 'id' is missing
});

// Now you can safely use conditional logic:
const screenSplitStrategy = selectedPokemonId
  ? "list and details"
  : "only list";
```

#### Enhanced Error Messages:

```tsx
// If you use full parsing but partial would work, you get a helpful hint:
Invalid route params for route PokemonId: Required at "id".
ℹ️ If you wanted to use partial params, pass {partial:true} as second parameter.
```

### 3. **Type System Improvements** 🛡️

#### Changed from `ZodSchema` to `ZodAnyObject`:

```tsx
// Before (limited)
export function useParams<Params extends z.ZodSchema>

// After (more capable)
export function useParams<Params extends z.AnyZodObject>
```

**Why this change?**

- `ZodAnyObject` supports `.partial()` method needed for flexible parameter parsing
- Enables better type inference and validation
- Required for the partial parameter functionality

### 4. **Advanced Debouncing System** ⚡

#### New `useDebounceCallback` Hook:

```tsx
export function useDebounceCallback<T extends (...args: any) => ReturnType<T>>(
  func: T,
  options: {
    delay?: number; // Default: 500ms
    debounceOrThrottle?: "debounce" | "throttle"; // Default: "debounce"
    leading?: boolean; // Execute on leading edge
    trailing?: boolean; // Execute on trailing edge
    maxWait?: number; // Maximum wait time
  } = {},
): DebouncedState<T>;
```

**Features:**

- **Supports both debounce and throttle**
- **Proper cleanup** on component unmount
- **Control methods**: `cancel()`, `flush()`, `isPending()`
- **Flexible configuration**

#### When to Use Debounce vs Throttle:

**Debounce** (default) - Wait for user to stop typing:

```tsx
// Search input - only search after user stops typing for 500ms
debouncedSetSearchParams({
  searchValue: e.target.value,
});
```

**Throttle** - Execute at regular intervals:

```tsx
// Auto-save form data every 5 seconds while user is typing
const throttledSaveToServer = useDebounceCallback(
  (formData) => {
    // Save to server/local storage
    saveFormData(formData);
  },
  {
    delay: 5000,
    debounceOrThrottle: "throttle",
  },
);

// Usage in a textarea
<textarea
  value={content}
  onChange={(e) => {
    setContent(e.target.value);
    throttledSaveToServer({ content: e.target.value });
  }}
/>;
```

**Other throttle use cases:**

- Sending analytics events at regular intervals
- Updating real-time dashboards
- Rate-limiting API calls
- Sending "user is typing" indicators

### 5. **Improved URL Parameter Handling** 🔗

#### Array Parameter Support:

```tsx
// Before: Arrays were inconsistently handled
// After: Type-aware array parsing based on Zod schema

// If your schema defines:
const schema = z.object({
  types: z.array(z.string()).optional(),
  search: z.string().optional(),
});

// URL: ?types=fire&types=water&search=pikachu
// Result: { types: ["fire", "water"], search: "pikachu" }
```

#### Helper Functions:

- `getArrayKeysFromZodSchema()`: Identifies which parameters should be arrays
- `unwrapZodType()`: Handles optional, nullable, and default types
- `convertURLSearchParamsToObject()`: Improved parsing logic

### 6. **Bug Fixes** 🐛

#### Fixed Missing Leading Slash:

```tsx
// Before: Generated URLs like "pokemon/123" (broken)
// After: Generated URLs like "/pokemon/123" (correct)

return ["/", baseUrl, searchString ? `?${searchString}` : ""].join("");
```

### 7. **Development Experience** 🚀

#### New Dependencies:

- `lodash.debounce` + `@types/lodash.debounce`
- `lodash.throttle` + `@types/lodash.throttle`

#### New Build Script:

```json
{
  "scripts": {
    "build:watch": "tsup --watch" // For development
  }
}
```

#### Workspace Configuration:

- Added `pnpm-workspace.yaml` for better monorepo management
- Improved build and development workflow

## Real-World Example: Pokemon App

This example demonstrates all features in action:

### 1. **Layout with Conditional Rendering**

```tsx
// Layout detects if details are shown without errors
const { id: selectedPokemonId } = useParams(PokemonId, { partial: true });

// useSearchParamsState with partial support for layout state management
const {
  searchParams,
  setSearchParams: setSearchParamsInLayout,
  debouncedSetSearchParams: debouncedSetSearchParamsInLayout,
} = useSearchParamsState(Pokemon, { partial: true });

const {
  setSearchParams: setSearchParamsInDetails,
  debouncedSetSearchParams: debouncedSetSearchParamsInDetails,
} = useSearchParamsState(PokemonId, { partial: true });

// Conditional CSS classes based on parameter presence
const screenSplitStrategy = selectedPokemonId
  ? "list and details"
  : "only list";
```

### 2. **Search with Debouncing**

```tsx
// Real-time search without excessive URL updates
<Input
  defaultValue={searchParams.searchValue}
  onChange={(e) =>
    debouncedSetSearchParams({
      searchValue: e.target.value,
      cursor: 0, // Reset pagination
    })
  }
/>
```

### 3. **Filtering with State Management**

```tsx
// Type-safe filter management
onFilterSelectionChange: (filters) => {
  setSearchParams({
    types: asPokemonTypesNamesArr(filters),
    cursor: null, // Remove pagination cursor
  });
};
```

### 4. **Pagination with URL State**

```tsx
// Pagination state persisted in URL
<DataTablePagination
  onNext={() => setSearchParams({ cursor: pokemonList?.nextCursor })}
  onPrevious={() => setSearchParams({ cursor: pokemonList?.previousCursor })}
/>
```

### 5. **Navigation Between Views**

```tsx
// Smart navigation that preserves search state
onRowClick={(row) => {
  const newUrl = selectedPokemonId === row.original.id
    ? Pokemon({}, searchParams)        // Go back to list
    : PokemonId({ id: row.original.id }, searchParams); // Show details
  router.push(newUrl);
}}
```

## Benefits

1. **Developer Experience**: URL parameters feel like React state
2. **Performance**: Built-in debouncing prevents excessive updates
3. **Type Safety**: Full TypeScript support with runtime validation
4. **Flexibility**: Works with both full and partial parameter parsing
5. **Standards Compliance**: Proper handling of array parameters in URLs
6. **Backward Compatibility**: Existing code continues to work unchanged

## Migration Guide

### For Existing Users:

- All existing code continues to work without changes
- New features are opt-in
- Type improvements are backward compatible

### To Use New Features:

```tsx
// Old way (still works)
const searchParams = useSearchParams(routeBuilder);

// New way (recommended for state management)
const { searchParams, setSearchParams } = useSearchParamsState(routeBuilder);

// For layouts that need conditional logic
const params = useParams(routeBuilder, { partial: true });

// useSearchParamsState with partial support (useful in layouts)
const { searchParams, setSearchParams } = useSearchParamsState(routeBuilder, {
  partial: true,
});
```

This enhancement significantly improves the developer experience when working with URL-based state management in React applications, making it as easy as working with regular React state while maintaining all the benefits of URL-based state persistence.
