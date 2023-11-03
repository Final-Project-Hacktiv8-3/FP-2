const initialState = {
    rekapan: [], // An array to hold cart items
  };
  
  const addRekapanReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_REKAPAN':
        const addedProductId = action.payload;
        const existingItemIndex = state.rekapan.findIndex(cartItem => cartItem.id === addedProductId.id );

        console.log(addedProductId);
        
       if (existingItemIndex !== -1) {
        state.rekapan[existingItemIndex].quantity += addedProductId.quantity;
      } else {
        state.rekapan.push({ id:addedProductId.id,userId:addedProductId.userId ,quantity: addedProductId.quantity,image:addedProductId.image,price:addedProductId.price,title:addedProductId.title});
      }
        return state;
      
      default:
        return state;
    }
    
  };
  
  export default addRekapanReducer;