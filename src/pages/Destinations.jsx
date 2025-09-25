import { Link, useOutletContext, useSearchParams } from 'react-router';
import { DestinationsGrid } from '../components';

export default function Destinations() {
  const destinations = useOutletContext();
  const [searchParams] = useSearchParams();
  const rawQuery = (searchParams.get('q') || '').trim();
  const query = rawQuery.toLowerCase();

  if (!destinations?.length) {
    return <p className="message--loading">Loading...</p>;
  }

  const filteredDestinations = query
    ? destinations.filter((destination) => {
        const haystack = `${destination.title} ${destination.slug}`.toLowerCase();
        return haystack.includes(query);
      })
    : destinations;

  const hasMatches = filteredDestinations.length > 0;

  return (
    <main className="mx-auto flex w-full flex-col gap-12 px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="btn btn-outline btn-sm sm:btn-md">
          ← Back to Home
        </Link>
        {hasMatches && (
          <span className="text-sm text-base-content/70">
            {filteredDestinations.length}{' '}
            {filteredDestinations.length === 1 ? 'destination' : 'destinations'} available
          </span>
        )}
      </div>

      <section className="text-center sm:text-left">
        <h1 className="text-3xl font-bold sm:text-4xl">Explore All Destinations</h1>
        {rawQuery ? (
          <p className="mt-2 text-base-content/70">
            Showing destinations matching "{rawQuery}".
          </p>
        ) : (
          <p className="mt-2 text-base-content/70">
            Discover exciting and affordable travel spots curated just for software engineering
            students.
          </p>
        )}
      </section>

      {hasMatches ? (
        <DestinationsGrid destinations={filteredDestinations} />
      ) : (
        <div className="rounded-2xl border border-base-300 bg-base-100 p-10 text-center shadow-sm">
          <p className="text-lg font-semibold">No matches found for "{rawQuery}".</p>
          <p className="mt-2 text-base-content/70">
            Try searching for another city or head back to explore all destinations.
          </p>
        </div>
      )}
    </main>
  );
}
