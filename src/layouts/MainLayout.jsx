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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-3">
        <Outlet context={destinations} />
      </main>
      <Footer />
    </div>
  );
}
