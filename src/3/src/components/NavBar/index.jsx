import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import logo from '../../assets/logo.webp';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/" activeClassName="active">
                        Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
                        Contact
            </NavLink>
          </li>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
                        About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
                        Products
            </NavLink>
          </li>
        </ul>
        <div className="sign-in">
          <span>Sign in</span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
