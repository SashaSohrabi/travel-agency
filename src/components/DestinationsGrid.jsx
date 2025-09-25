import Card from './Card';

export default function DestinationsGrid({ destinations }) {
  return (
    <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
      <title>Destinations</title>
      {destinations?.map((d) => (
        <Card {...d} key={d.id} />
      ))}
    </div>
  );
}
