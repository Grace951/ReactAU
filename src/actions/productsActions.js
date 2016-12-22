import * as types from './actionTypes';
import ProductApi from '../api/mockProductsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return ProductApi.getAllProducts()
      .then(products => {
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        throw(error);
      });
  };
}


