import React from "react";
import logo from "../../images/logotype-transparent-white.svg";
import "../../css/app.css";

import CustomersMap from "../customers/customersMap";
import NearestCustomers from "../customers/nearestCustomers";
import Error from "../error/error";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="map">
        <Error>
          <CustomersMap />
        </Error>
      </div>
      <div className="table">
        <Error>
          <NearestCustomers />
        </Error>
      </div>
    </div>
  );
}

export default App;
