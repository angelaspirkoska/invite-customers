import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import _ from "lodash";

import CustomersMap from "./customersMap";
import { customersLocation } from "../../data/customersLocation";

test("renders customer map component correctly", () => {
  const wrapper = shallow(<CustomersMap />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
describe("checks customers location data ", () => {
  test("has data to show on map", () => {
    const spy = jest.spyOn(CustomersMap.prototype, "renderMarkers");
    const component = shallow(<CustomersMap />);
    expect(spy).toHaveBeenCalled();
  });

  test("has valid data", () => {
    let invalidCustomers = _.filter(customersLocation, (customer) => {
      return !customer.latitude || !customer.longitude || !customer.name || !customer.user_id;
    });
    /*Throw error explicitly if the data from the json file is invalid */
    if (invalidCustomers.length > 0) throw new Error("Customers location data is invalid.");
  });
});
