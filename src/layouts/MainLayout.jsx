import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header, Footer } from '../components';
import { destinationsLoader } from '../data/loaders';

export default function MainLayout() {
  const [destinations, setDestinations] = useState([]);

  const fetchData = async () => {
    const data = await destinationsLoader();
    setDestinations(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Outlet context={destinations} />
      <Footer />
    </>
  );
}
