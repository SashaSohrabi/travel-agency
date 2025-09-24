import { useOutletContext } from 'react-router';

export default function Home() {
  const destinations = useOutletContext();
  console.log(destinations);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">Home Page!</h1>
    </>
  );
}
