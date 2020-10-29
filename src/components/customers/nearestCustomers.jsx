import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import Paragraph from "../reusable/paragraph";
import Button from "../reusable/button";

import findNearestCustomers from "../../actions/findNearestCustomers";

class NearestCustomers extends Component {
  componentDidMount() {
    this.props.findNearestCustomers(100);
  }

  /**
   *renders nearest customers calculated by the great curcle distance formula
   *use data from the redux store-nearestCustomers
   */
  renderNearestCustomers() {
    return _.map(this.props.nearestCustomers, (customer, i) => {
      return (
        <tr key={i} data-test-id="table-row">
          <td>{customer.user_id}</td>
          <td>{customer.name}</td>
          <td>{customer.distance}</td>
        </tr>
      );
    });
  }

  /**
   *component render method
   */
  render() {
    if (!this.props.nearestCustomers) return <div>Loading..</div>;

    return (
      <React.Fragment>
        <Paragraph className="title" text="Nearest customers" />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Distance from office</th>
            </tr>
          </thead>
          <tbody>{this.renderNearestCustomers()}</tbody>
        </table>
        <div className="button-container">
          <Button
            buttonText="Invite customers"
            className="button"
            onButtonClick={() => console.log("Button is clicked!")}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nearestCustomers: state.nearestCustomers,
  };
};
const mapDispatchToProps = {
  findNearestCustomers,
};
export default connect(mapStateToProps, mapDispatchToProps)(NearestCustomers);
