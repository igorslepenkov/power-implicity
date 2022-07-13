import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />

      <nav className="navbar__navigation">
        <ul className="navbar__links-list">
          <li className="navbar__links-item">
            <a className="navbar__link" href="./">
              Features
            </a>
          </li>
          <li className="navbar__links-item">
            <a className="navbar__link" href="./">
              Partners
            </a>
          </li>
          <li className="navbar__links-item">
            <a className="navbar__link" href="./">
              Stories
            </a>
          </li>
        </ul>
      </nav>

      <button className="navbar__download-btn" type="button">
        Download for free
      </button>
    </header>
  );
};

export { Navbar };
