import { useOutletContext } from 'react-router';
import { Card, SearchBar } from '../components';

export default function Home() {
  const destinations = useOutletContext();
  if (!destinations?.length)
    return <p className="message--loading">Loading...</p>;

  return (
    <>
      <SearchBar />
      <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
        <title>Destinations</title>
        {destinations?.map((d) => (
          <Card {...d} key={d.id} />
        ))}
      </div>
      <span
        className="scroll-thingy"
        role="img"
        aria-label="Scroll Thingy Rocket"
      ></span>
    </>
  );
}
