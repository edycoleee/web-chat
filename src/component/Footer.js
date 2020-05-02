import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  Copyright = () => {
    return (
      <h2 variant="body2" color="textsecondary" align="center">
        {"Copyright @"}
        {"Kalijaga Coding"}
        {new Date().getFullYear}
        {"."}
      </h2>
    )
  }
  render() {
    return (
      <div>
        <footer>
          <div class="footer 1-box is-center">
              {this.Copyright()}
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
