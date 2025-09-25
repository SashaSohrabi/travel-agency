import { useOutletContext, useSearchParams } from 'react-router';
import { DestinationsGrid } from '../components';

export default function Destinations() {
  const destinations = useOutletContext();
  const [searchParams] = useSearchParams();
  const query = (searchParams.get('q') || '').trim().toLowerCase();

  if (!destinations?.length) {
    return <p className="message--loading">Loading...</p>;
  }

  const filteredDestinations = query
    ? destinations.filter((destination) => {
        const haystack =
          `${destination.title} ${destination.slug}`.toLowerCase();
        return haystack.includes(query);
      })
    : destinations;

  if (!filteredDestinations.length) {
    return (
      <main>
        <h1>Explore All Destinations</h1>
        <p>No matches found for "{query}". Try another destination.</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Explore All Destinations</h1>
      {query ? (
        <p>Showing destinations matching "{query}".</p>
      ) : (
        <p>
          Discover exciting and affordable travel spots curated just for
          software engineering students.
        </p>
      )}
      <DestinationsGrid destinations={filteredDestinations} />
    </main>
  );
}
