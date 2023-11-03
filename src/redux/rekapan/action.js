export const addToRekapan = (id,userId,quantity,image,price,title) => {
    return {
      type: 'ADD_TO_REKAPAN',
      payload: { 
        id: id,
        userId: userId,
        quantity: quantity,
        image: image,
        price: price,
        title: title,
       },
    };
  };