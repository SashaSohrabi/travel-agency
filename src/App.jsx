import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import {
  Home,
  About,
  Contact,
  Destinations,
  SingleDestination,
  NotFound,
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/destinations">
            <Route index element={<Destinations />} />
            <Route path=":slug" element={<SingleDestination />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
