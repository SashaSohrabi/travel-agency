import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import { Home, About, Contact, Destinations, SingleDestination, NotFound } from './pages';

function App() {
  return (
    <>
      {/* <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
      /> */}

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<SingleDestination />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
