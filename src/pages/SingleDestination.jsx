import { Link, useParams, useOutletContext } from 'react-router';

export default function SingleDestination() {
  const { slug } = useParams();
  const destinations = useOutletContext();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-16 text-center">
        <h1 className="text-3xl font-bold">Destination not found</h1>
        <p className="text-base-content/70">
          We couldn’t find the destination you were looking for. Please return to the destinations list
          and try another location.
        </p>
        <Link to="/destinations" className="btn btn-secondary mx-auto">
          Back to Destinations
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <Link to="/destinations" className="btn btn-outline btn-sm w-fit">
        ← All Destinations
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <figure className="overflow-hidden rounded-3xl border border-base-300 bg-base-200">
          <img
            src={destination.image}
            alt={destination.title}
            className="h-full w-full object-cover object-center"
          />
        </figure>

        <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-base-content">{destination.title}</h1>
          <p className="mt-4 text-base-content/70">{destination.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-base-content/60">
            <span className="badge badge-secondary badge-outline uppercase">Popular</span>
            <span className="badge badge-outline">Student-friendly</span>
            <span className="badge badge-outline">Culture</span>
          </div>

          <button className="btn btn-secondary mt-8 w-full sm:w-auto">Plan Your Trip</button>
        </div>
      </div>

      <section className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-base-content">Why visit {destination.title}?</h2>
        <p className="mt-3 text-base-content/70">
          Every journey to {destination.title} combines local traditions, vibrant neighborhoods, and
          opportunities to connect with fellow students. Immerse yourself in the culture, build your
          portfolio with real-world experiences, and create memories that will inspire your next
          project.
        </p>
      </section>
    </article>
  );
}
