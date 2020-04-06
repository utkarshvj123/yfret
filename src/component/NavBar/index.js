import React from "react";
import "./style.css";
import Cart from "../Cart";

export default function NavBar() {
 
  
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="d-flex flex-row justify-content-between">
          <div style={{ marginTop: "21px" }}><h4><b>YFret</b></h4></div>
          <div>
            <Cart />
          </div>
        </div>
      </nav>
    </div>
  );
}
