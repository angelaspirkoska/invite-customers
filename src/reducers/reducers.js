import { combineReducers } from "redux";
import nearestCustomersReducer from "./nearestCustomersReducer";

export default combineReducers({
  nearestCustomers: nearestCustomersReducer,
});
