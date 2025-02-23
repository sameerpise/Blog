import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faUser, faPhone,} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png"; // Adjust the path if needed
import '../Componets/animatedline/animeted.css'
import '../App.css'

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
 

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
     
      setSearchTerm("");
    }
  };
  return (
    <header className="navbar navbar-expand-md navbar-light bg-white fixed-top mediumnavigation">
      <div className="container">
        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsWow"
          aria-controls="navbarsWow"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


 
         <a className="navbar-brand logo" href="/">
          {/* <img src={logo} alt="Blog Logo" /> */}
          Life Unfiltered
        </a> 

        <div className="collapse navbar-collapse justify-content-center" id="navbarsWow">
          {/* <form className="d-flex w-50" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          
          </form> */}
        </div>
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarsWow">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item animated-underline ">
              <a className="nav-link hover:text-blue-500 transition duration-300"  href="/AllPost"> <FontAwesomeIcon icon={faNewspaper} className="mr-3" style={{marginRight:"10px"}} />CreatePost</a>
            </li>

            {/* Dropdown Menu */}
            {/* <li className="nav-item dropdown">
              <a 
                className="nav-link "
         
                id="dropdown01"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Post
              </a>

            </li> */}

            <li className="nav-item animated-underline ">
              <a className="nav-link hover:text-green-500 transition duration-300" href="/AllPostt"><FontAwesomeIcon icon={faNewspaper} className="mr-3" style={{marginRight:"10px"}} />AllPost</a>
            </li>
            <li className="nav-item animated-underline ">
              <a className="nav-link hover:text-green-500 transition duration-300" href="/about"> <FontAwesomeIcon icon={faUser} className="mr-2" style={{marginRight:"10px"}} /> About</a>
            </li>
            <li className="nav-item animated-underline ">
              <a className="nav-link hover:text-red-500 transition duration-300" href="/contact" to="/contact"><FontAwesomeIcon icon={faPhone} className="mr-2" style={{marginRight:"10px"}} />Contact</a>
            </li>
{/*             <li className="nav-item animated-underline">
              <a target="_blank" rel="noopener noreferrer" className="nav-link highlight" href="/login">
              <FontAwesomeIcon icon={faUserShield} className="mr-2" style={{marginRight:"9px"}}  /> Admin
              </a>
            </li> */}
          </ul>
         
        </div>
      </div>
    </header>
  );
};

export default NavBar;
