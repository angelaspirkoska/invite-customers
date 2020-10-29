export const FIND_NEAREST_CUSTOMER = "FIND_NEAREST_CUSTOMER";

/**
 * action creator findNearestCustomer
 * creates action with type FIND_NEAREST_CUSTOMER and payload value withinKilometers
 * @param {int} withinKilometers max kilometer distance from the office point
 */
export default function findNearestCustomer(withinKilometers) {
  return { type: FIND_NEAREST_CUSTOMER, payload: withinKilometers };
}
