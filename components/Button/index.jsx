import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Bootstrap from "bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import "./Button.css";

function Button(props) {
  const { className } = props;

  return (
    <div className={`button ${className || ""}`}>
      <ReactBootstrap.Button size="" disabled variant="primary">
        Sign up for updates
      </ReactBootstrap.Button>
    </div>
  );
}

export default Button;
