const initialState = {
    latest: [
      {
        id:1,
        quantity:20
      },
      {
        id:2,
        quantity:20
      },
      {
        id:3,
        quantity:20
      },
      {
        id:4,
        quantity:20
      },
      {
        id:5,
        quantity:20
      },
      {
        id:6,
        quantity:20
      },
      {
        id:7,
        quantity:20
      },
      {
        id:8,
        quantity:20
      },
      {
        id:9,
        quantity:20
      },
      {
        id:10,
        quantity:20
      },
      {
        id:11,
        quantity:20
      },
      {
        id:12,
        quantity:20
      },
      {
        id:13,
        quantity:20
      },
      {
        id:14,
        quantity:20
      },
      {
        id:15,
        quantity:20
      },
      {
        id:16,
        quantity:20
      },
      {
        id:17,
        quantity:20
      },
      {
        id:18,
        quantity:20
      },
      {
        id:19,
        quantity:20
      },
      {
        id:20,
        quantity:20
      },



    ], 
  };
  
  const latestProducerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LATEST_PRODUCT':
        const addedProductId = action.payload;
        const existingItemIndex = state.latest.findIndex(latestItem => latestItem.id === addedProductId.id );
        
       if (existingItemIndex !== -1) {
        if(addedProductId.quantity > state.latest[existingItemIndex].quantity  ){

        }else{

          state.latest[existingItemIndex].quantity -= addedProductId.quantity;
        }
      } 
        return state;

      case 'UPDATE_LATEST':
        const update = action.payload;
        console.log(update);
        const updateIndex = state.latest.findIndex(latestItem => latestItem.id === update.id );

        if (updateIndex !== -1) {
          state.latest[updateIndex].quantity = update.quantity;
        }
        return state;
      
      default:
        return state;
    }
    
  };
  
  export default latestProducerReducer;