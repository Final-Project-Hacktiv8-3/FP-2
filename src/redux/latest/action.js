export const latestUpdate = (id,quantity) => {
    return {
      type: 'LATEST_PRODUCT',
      payload: { 
        id: id,
        quantity: quantity,
       },
    };
  };   

export const updateLatest = (id,quantity) => {
    return {
      type: 'UPDATE_LATEST',
      payload: { 
        id: id,
        quantity: quantity,
       },
    };
  };