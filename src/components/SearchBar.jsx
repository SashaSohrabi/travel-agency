import { useNavigate } from 'react-router';

export default function SearchBar({ initialDestination = '' }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const destination = (formData.get('destination') || '').toString().trim();

    const params = new URLSearchParams();
    if (destination) {
      params.set('q', destination);
    }

    navigate(
      `/destinations${params.toString() ? `?${params.toString()}` : ''}`
    );
  };

  return (
    <form
      className="search-shell mx-auto mb-5 flex w-full max-w-5xl items-stretch overflow-hidden rounded-full border border-base-300 bg-base-100 shadow-sm"
      role="search"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="origin">
        Origin
      </label>
      <input
        id="origin"
        name="origin"
        type="text"
        placeholder="Origin"
        className="hidden sm:block min-w-[9rem] flex-1 border-r border-base-300 bg-transparent px-6 py-4 text-sm text-base-content placeholder:text-base-content/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
      />

      <label className="sr-only" htmlFor="destination">
        Destination
      </label>
      <input
        id="destination"
        name="destination"
        type="text"
        placeholder="Destination"
        defaultValue={initialDestination}
        className="min-w-[10rem] flex-1 border-r border-base-300 bg-transparent px-6 py-4 text-sm text-base-content placeholder:text-base-content/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
      />

      <label className="sr-only" htmlFor="departure-date">
        Departure date
      </label>
      <input
        id="departure-date"
        name="departureDate"
        type="date"
        placeholder="dd.mm.yyyy"
        className="hidden md:block min-w-[8.5rem] border-r border-base-300 bg-transparent px-6 py-4 text-sm text-base-content placeholder:text-base-content/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
      />

      <label className="sr-only" htmlFor="return-date">
        Return date
      </label>
      <input
        id="return-date"
        name="returnDate"
        type="date"
        placeholder="dd.mm.yyyy"
        className="hidden sm:block min-w-[8.5rem] border-r border-base-300 bg-transparent px-6 py-4 text-sm text-base-content placeholder:text-base-content/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
      />

      <button
        type="submit"
        className="flex items-center rounded-l-none rounded-r-full bg-secondary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-base-100"
      >
        Search
      </button>
    </form>
  );
}
