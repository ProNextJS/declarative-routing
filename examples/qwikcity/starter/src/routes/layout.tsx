import { component$, Slot } from "@builder.io/qwik";
import { Link, type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <header>
        <header class="mb-5 flex gap-2 rounded-b-xl bg-blue-900 px-6 py-3 text-2xl text-white shadow-gray-700 drop-shadow-2xl">
          <Link href="/" class="font-extrabold">
            Home
          </Link>
          <Link href="/search" class="font-light">
            Search
          </Link>
        </header>
      </header>
      <div class="@container">
        <Slot />
      </div>
    </>
  );
});
