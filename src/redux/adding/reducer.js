const initialState = {
    cartItems: [],
  };
  
  const addCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const addedProductId = action.payload;
        console.log(addedProductId)
        const existingItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === addedProductId.id );
        
       if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += addedProductId.quantity;
        state.cartItems[existingItemIndex].restQuantity -= 1;
      } else {
        state.cartItems.push({ id:addedProductId.id,userId:addedProductId.usersId ,quantity: addedProductId.quantity,image:addedProductId.image,price:addedProductId.price,title:addedProductId.title,restQuantity:addedProductId.restQuantity });
      }
        return state;

      case 'PLUS_TO_CART':
        const stuff = action.payload;
        const existingItemsIndex = state.cartItems.findIndex(cartItem => cartItem.id === stuff.id);

        if (existingItemsIndex  !== -1) {
          state.cartItems[existingItemsIndex ].quantity += 1;
          state.cartItems[existingItemsIndex ].restQuantity -= 1;
        }
      return state;

      case 'MIN_TO_CART':
        const minusStuff = action.payload;
        const existingMinItemIndex = state.cartItems.findIndex(cartItem => cartItem.id === minusStuff.id);


        if (existingMinItemIndex !== -1) {
          if(minusStuff.quantity <= 0){

          }else{
            state.cartItems[existingMinItemIndex].quantity -= 1;
            state.cartItems[existingMinItemIndex].restQuantity += 1;

          }
        }
        return state;
      case 'DELETE_CART':
        const deleteCart = action.payload;
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== deleteCart.id),
        };

      default:
        return state;
    }
    
  };
  
  export default addCartReducer;