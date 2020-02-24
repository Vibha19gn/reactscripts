import { combineReducers } from "redux";
import {
  customersReducers,
  config as CustomerConfig
} from "./components/customers";
import { spinnerReducers as spinner } from "./common/spinner";

export default combineReducers({
  spinner,
  [CustomerConfig.STATE_KEY]: customersReducers
});
