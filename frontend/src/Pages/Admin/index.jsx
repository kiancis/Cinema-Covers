import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../files/logo pag.png";
import { Link } from "react-router-dom";
import "./style.css";

export default function Admin() {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    axios("http://localhost:4000/trailer").then((response) =>
      setTrailers(response.data)
    );
  }, []);

  const handleDelete = (_id) => {
    axios.delete(`http://localhost:4000/trailer/${_id}`);
    setTrailers(trailers.filter((trailer) => trailer._id !== _id));
  };

  return (
    <>
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
      <br />
      <br />
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Description</th>
              <th>Director</th>
              <th>Actors</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {trailers.map((trailer) => (
              <tr key={trailer._id}>
                <td className="cover">
                  <img src={trailer.cover} alt={trailer.title} />
                </td>
                <td>{trailer.title}</td>
                <td>{trailer.description}</td>
                <td>{trailer.director}</td>
                <td>{trailer.actors}</td>
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(trailer._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
