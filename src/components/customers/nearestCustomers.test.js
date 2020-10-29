import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import _ from "lodash";

import NearestCustomers from "./nearestCustomers";
import { FIND_NEAREST_CUSTOMER } from "../../actions/findNearestCustomers";

//because we have customer data in a file, we can set up test data to do tests on
import { nearestCustomers } from "../../tests/testData/nearestCustomersTestData";

const mockStore = configureStore([]);

describe("renders nearest customers component correctly ", () => {
  let store;
  let component;
  let action = { type: FIND_NEAREST_CUSTOMER, payload: 100 };
  beforeEach(() => {
    store = mockStore({
      nearestCustomers: nearestCustomers,
    });

    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <NearestCustomers />
      </Provider>
    );
  });

  test("should render with given state from Redux store", () => {
    const trElements = component.root.findAllByType("tr");
    expect(trElements.length).toBe(17);

    _.forEach(trElements, (trElement) => {
      expect(trElement.children.length).toBe(3);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("should dispatch findNearestCustomers action", () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
