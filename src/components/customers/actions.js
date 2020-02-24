import fetch from 'isomorphic-fetch';
import {actionCreator} from "../../utils/action-creators";
import * as actionTypes from "./action-types";
import {actions as spinnerActions} from "../../common/spinner";


export const fetchCustomersSuccess = actionCreator(
  actionTypes.FETCH_CUSTOMERS_SUCCESS, "customers");

export const fetchCustomersFailure = actionCreator(
  actionTypes.FETCH_CUSTOMERS_FAILURE, "error");


export function fetchCustomers() {
  return (dispatch) => {
    dispatch(spinnerActions.openSpinner());
      return fetch("https://my-json-server.typicode.com/Vibha19gn/cusotmerList/cusotmers")
      .then(response => response.json())
      .then((result) => {
        dispatch(fetchCustomersSuccess(result));
        dispatch(spinnerActions.closeSpinner());
      }).catch(() => {
        dispatch(spinnerActions.closeSpinner());
        dispatch(fetchCustomersFailure("Failed.Please try again"));
      });
  };
}
