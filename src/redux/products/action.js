import axios from 'axios';

import {
    START_FETCHING_PRODUCTS,
    SUCCESS_FETCHING_PRODUCTS,
    ERROR_FETCHING_PRODUCTS,
  } from './constant';
  
  
  export const startFetchingProducts = () => {
    return {
      type: START_FETCHING_PRODUCTS,
    };
  };
  
  export const successFetchingProducts = ({ products }) => {
    return {
      type: SUCCESS_FETCHING_PRODUCTS,
      products,
    };
  };
  
  export const errorFetchingProducts = () => {
    return {
      type: ERROR_FETCHING_PRODUCTS,
    };
  };
  
  export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(startFetchingProducts());
  
      try {
  
        let res = await axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            const products = response.data.map((product) => ({
              ...product,
              quantity: 20,
            }));
            dispatch(
                successFetchingProducts({
                    products: products,
              })
            );
          })
      } catch (error) {
        dispatch(errorFetchingProducts());
      }
    };
  };

  export const subtractProducts = (id,quantity) => {
    return {
      type: 'MINUS_PRODUCTION',
      payload: { 
        id: id,
        restQuantity: quantity,

       },
    };
  };
  