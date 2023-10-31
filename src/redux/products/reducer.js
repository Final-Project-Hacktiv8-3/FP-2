import {
    START_FETCHING_PRODUCTS,
    SUCCESS_FETCHING_PRODUCTS,
    ERROR_FETCHING_PRODUCTS,
  } from './constant';
  
  const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
  };
  
  const initialState = {
    data: [],
    quantity:[20],
    status: statuslist.idle,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case START_FETCHING_PRODUCTS:
        return { ...state, status: statuslist.process };
  
      case ERROR_FETCHING_PRODUCTS:
        return { ...state, status: statuslist.error };
  
      case SUCCESS_FETCHING_PRODUCTS:
        return {
          ...state,
          status: statuslist.success,
          data: action.products,
        };
      case 'MINUS_PRODUCTION':
        const {id,restQuantity} = action.payload
        console.log(id)
        const existingProducts = state.data.find((cartItem)=> cartItem.id === id)

          
       if (existingProducts) {
        existingProducts.quantity -= restQuantity;
      }

        return state
  
      default:
        return state;
    }
  }


  
  