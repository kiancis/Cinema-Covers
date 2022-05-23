import { Link } from "react-router-dom";
import "./style.css";

export default function Register() {
  return (
    <div className="">
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>LastName</label>
        </div>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>UserName</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Password</label>
        </div>
        <Link to="/login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Done
        </Link>
        <div className="cancel">
            <Link to="/Login" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Cancel
            </Link>
        </div>
      </form>
    </div>
  </div>
  )
}
