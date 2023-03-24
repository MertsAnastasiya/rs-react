import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav>
          <ul className="navigation__list">
            <li>
              <NavLink to={'/'} className="link">Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className="link">About Us</NavLink>
            </li>
            <li>
              <NavLink to={'/form'} className="link">Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
