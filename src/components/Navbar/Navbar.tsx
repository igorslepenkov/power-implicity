import "./styles.scss";
import logo from "../../assets/apple-logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />

      <ul className="navbar__links">
        <li>
          <a className="navbar__link" href="#">
            Features
          </a>
        </li>
        <li>
          <a className="navbar__link" href="#">
            Partners
          </a>
        </li>
        <li>
          <a className="navbar__link" href="#">
            Stories
          </a>
        </li>
      </ul>

      <button className="navbar__download-btn">Download for free</button>
    </header>
  );
};

export { Navbar };
