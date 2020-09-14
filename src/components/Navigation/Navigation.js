import React from "react";
import './Navigation.css'

function Navigation() {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-dark rigth  bg-dark ">
  <a className="navbar-brand" href="/App">CoviDWeb-19</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <a className="nav-link active" href="/App/Home">Home <span className="sr-only">(current)</span></a>
      <a className="nav-link active" href="/App/WorldInfo">WorldInfo <span className="sr-only">(current)</span></a>
      <a className="nav-link active" href="/App/Notices">Notices <span className="sr-only">(current)</span></a>

      <a className="nav-link active" href="/App/Profile">Profile <span className="sr-only">(current)</span></a>
      <a className="nav-link active" href="/App/Credit">Credits <span className="sr-only">(current)</span></a>
      <a className="nav-link active rigth " href="/Login">Logout <span className="sr-only">(current)</span></a>

    </div>
  </div>
  </nav>
  );
}

export default Navigation;
