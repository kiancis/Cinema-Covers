import { Link } from "react-router-dom";
import logo from "../../files/logo pag.png";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="head">
        <img src={logo} alt=" " />
        <h1>Katanga Movies</h1>
      </div>
      <nav>
        <div className="nav">
          <ul>
            <li>
              <Link to="index.html">Home</Link>
            </li>
            <li>
              <Link to="about.html">About</Link>
            </li>
            <li>
              <Link to="contact.html">Contact</Link>
            </li>
          </ul>
          <div className="search">
            <input type="text" />
            <button>Buscar</button>
          </div>
        </div>
      </nav>
      <br/>
      <br/>
      
    </div>
  );
}
