import { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaUserPlus,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa"; // Import icons

export class Naverbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p">
          <a className="navbar-brand" href="#">
            React
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Slider">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contain">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/SiglePro">
                  Sigle Product
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Login">
                      <FaUser className="me-2" />
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Registor">
                      <FaUserPlus className="me-2" />
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Wishlist">
                      <FaHeart className="me-2" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Cart">
                      <FaShoppingCart className="me-2" />
                      Your Cart
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Account">
                      <FaUserCircle className="me-2" />
                      Account
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="Admin/AdPro">
                      <FaUser className="me-2" />
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Admin/AdCategory">
                      <FaUserPlus className="me-2" />
                      Add Cetegory
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Naverbar;
