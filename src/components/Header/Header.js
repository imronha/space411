import React, { Component } from "react";
import styles from "./headerStyle.css";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#missions">
                Missions
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#galleries">
                Galleries
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#nasatv">
                NASA TV
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#downloads">
                Downloads
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#spacex">
                SpaceX
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Welcome Home</h1>
            <h3>
              Catering to all your space needs. (Indirectly) Powered by{" "}
              <span>Nasa</span> and
              <span> SpaceX</span>
            </h3>
            <hr />
            <ul className="social"></ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
