import { NavLink } from 'react-router';
import appLogo from '../assets/logo.svg';

export default function NavBar() {
  return (
    <>
      <img src={appLogo} className="logo" alt="App logo" />
      <nav>
        <ul>
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/alpha-centauri">
              Alpha Centauri
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
