import {Link} from 'react-router-dom';
import "./style.css";

export default function NotFound() {
  return (
    <div>
    <section className="notFound">
        <div className="img">
        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage"/>
        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly"/>
        </div>
        <div className="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link to="/" className="yes">YES</Link>
        <a href="https://poki.com/es/g/papas-freezeria">NO</a>
        </div>
    </section>
</div>
  )
}
