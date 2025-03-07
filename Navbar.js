import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1> Notes App</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/create">New Note</Link>
      </div>
    </nav>
  );
}
