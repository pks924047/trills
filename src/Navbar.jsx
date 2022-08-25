import React from 'react';
import { NavLink } from 'react-router-dom';
import  web from '../src/images/title.webp';

const Navbar = () => {
    return (
<>

        
        
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand"  to="/"><img src={web} className="img-fluid animated" alt="home img" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="container-fluid nav_bg">
      <div className='row'>
        <div className="col-6 mx-auto">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName="menu_active" exact className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink exact className="dropdown-item" to="/service">Action</NavLink></li>
            <li><NavLink exact className="dropdown-item" to="/service">Another action</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/industrie">Industrie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/technology">Technology</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/blog">Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
      </div>
      </div>
</div>
    </div>
  </div>
</nav>

</>
);
};

export default Navbar;