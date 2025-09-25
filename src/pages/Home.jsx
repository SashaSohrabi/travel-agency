import { useOutletContext } from 'react-router';
import { DestinationsGrid, SearchBar } from '../components';

export default function Home() {
  const destinations = useOutletContext();
  if (!destinations?.length)
    return <p className="message--loading">Loading...</p>;

  return (
    <>
      <SearchBar />
      <DestinationsGrid destinations={destinations} />
    </>
  );
}
