import Card from './Card';

export default function DestinationsGrid({ destinations }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      <title>Destinations</title>
      {destinations?.map((d) => (
        <Card {...d} key={d.id} />
      ))}
    </div>
  );
}
