import _ from "lodash";

import { FIND_NEAREST_CUSTOMER } from "../actions/findNearestCustomers";
import { calcalculateGreatCircleDistance, validatePoint } from "../common/greatCurcleDistance";
import { customersLocation } from "../data/customersLocation";
import { officeLocation } from "../data/officeLocation";

export const initialState = [];
/**
 * nearest customer reducer
 * change state in response to actions with type: FIND_NEAREST_CUSTOMER
 * manage state: nearestCustomers
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case FIND_NEAREST_CUSTOMER: {
      let withinKilometars = action.payload;
      let nearestCustomers = [];

      //define office point -point one
      let officePoint = {
        latitude: officeLocation.latitude,
        longitude: officeLocation.longitude,
      };

      //validate first point - office location
      if (!validatePoint(officePoint)) {
        //log error on some external error service and return empty list
        return nearestCustomers;
      }

      //find nearest customers
      _.forEach(customersLocation, (customer) => {
        let customerPoint = {
          latitude: customer.latitude,
          longitude: customer.longitude,
        };

        if (!validatePoint(customerPoint)) {
          //log error on some external error service and do not calculate this customer location
          return;
        }
        //calculate distance from office point for each customer in the customes location list
        let distance = calcalculateGreatCircleDistance(officePoint, customerPoint);
        if (distance < withinKilometars) {
          let roundDistance = `${_.round(distance)} km`;
          nearestCustomers.push({ ...customer, distance: roundDistance });
        }
      });
      return _.orderBy(nearestCustomers, "distance");
    }
    default:
      return state;
  }
}
