import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  // Home Page Component
  return (
    <div>
      <center>
        <h1 style={{ marginTop: "1em" }}>Home</h1>
      </center>
      <div
        style={{ marginTop: "10em" }}
        className="d-flex justify-content-around"
      >
        <div className="d-grid gap-2 col-3 mx-auto">
          <Link to="/product" className="btn btn-success" type="button">
            Add Product
          </Link>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <Link to="/order" className="btn btn-primary" type="button">
            Place Order
          </Link>
        </div>
        <div className="d-grid gap-2 col-3 mx-auto">
          <Link to="/setting" className="btn btn-dark" type="button">
            Setting
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
