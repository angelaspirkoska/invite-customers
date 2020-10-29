import reducer from "./nearestCustomersReducer";
import { FIND_NEAREST_CUSTOMER } from "../actions/findNearestCustomers";
import { nearestCustomers } from "../tests/testData/nearestCustomersTestData";

//because we have customer data in a file, we can set up test data to do tests on
describe("nearest customers reducer works as expected", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, [])).toEqual([]);
  });

  test("should handle FIND_NEAREST_CUSTOMER action", () => {
    // important to pass correct payload
    const action = {
      type: FIND_NEAREST_CUSTOMER,
      payload: 100,
    };
    expect(reducer([], action)).toEqual(nearestCustomers);
  });
});
