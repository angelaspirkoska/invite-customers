import React, { Component } from "react";
import _ from "lodash";
import leaflet from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Paragraph from "../reusable/paragraph";

import { customersLocation } from "../../data/customersLocation";
import { officeLocation } from "../../data/officeLocation";

import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

class CustomersMap extends Component {
  /**
   *render markers for customers location*
   *each marker is render with popup component that shows customer id and customer name on the map
   */
  renderMarkers() {
    return _.map(customersLocation, (customer, i) => {
      return (
        <Marker key={i} position={[customer.latitude, customer.longitude]}>
          <Popup>
            <p>{`${customer.user_id}-${customer.name}`}</p>
          </Popup>
        </Marker>
      );
    });
  }

  /**
   *component render method
   */
  render() {
    return (
      <React.Fragment>
        <Paragraph className="title" text="Customers location" />
        <Map center={[officeLocation.latitude, officeLocation.longitude]} zoom={7}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {customersLocation && customersLocation.length > 0 && this.renderMarkers()}
        </Map>
      </React.Fragment>
    );
  }
}

export default CustomersMap;
