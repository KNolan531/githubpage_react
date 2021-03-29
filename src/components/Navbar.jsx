import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">     
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onClick="<Button>Hi</Button>">
              <Link to="/home" className="nav-links">
                <strong>Home</strong>
              </Link>
            </li>                    
            <li className="nav-item">
              <Link to="/journal" className="nav-links">
                <strong>Web Programming</strong> 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/eventlog" className="nav-links">
                <strong>Software Engineering</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-links">
                <strong>Web Apps</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-links">
                <strong>Data Structures </strong>
              </Link>
            </li>
            
            
            <li className="nav-item">
              <Link to="/messages" className="nav-links">
               <strong>LinkedIn</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links">
                <strong>About Me</strong> 
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
