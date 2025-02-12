import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Bank Statement Analyzer</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
