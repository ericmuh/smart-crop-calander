/*!

=========================================================
* Smart Crop Calender - v2.0.0
=========================================================

* Product Page: https://www.smart-crop-calender.netlify.app//product/light-bootstrap-dashboard-react
* Copyright 2020 Smart Crop Calender (https://www.smart-crop-calender.netlify.app/)


* Coded by Smart Crop Calender

=========================================================



*/
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Company
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Blog
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://www.smart-crop-calender.netlify.app/">Smart Crop Calender</a>, made with
              love for a better web
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
