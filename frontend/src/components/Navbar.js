import { ConnectButton } from "web3uikit";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rider" className="navbar-link">
              Rider
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Driver" className="navbar-link">
              Driver
            </Link>
          </li>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
