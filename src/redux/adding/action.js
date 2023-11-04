export const addToCart = (title,image,id,price,stuff) => {
  const userId = localStorage.getItem('userId');
  return {
    type: 'ADD_TO_CART',
    payload: { 
      id: id,
      usersId:userId,
      image: image,
      price: price,
      title: title,
      quantity: stuff ,
      restQuantity: 20-stuff || 19,
     },
  };
};

export const plusQuantity = (title,image,id,price,stuff,restQuantity) => {
  return {
    type: 'PLUS_TO_CART',
    payload: { 
      id: id,
      image: image,
      price: price,
      title: title,
      quantity: stuff,
      restQuantity: restQuantity,
     },
  };
};

export const minQuantity = (title,image,id,price,stuff,restQuantity) => {
  return {
    type: 'MIN_TO_CART',
    payload: { 
      id: id,
      image: image,
      price: price,
      title: title,
      quantity: stuff,
      restQuantity: restQuantity,
     },
  };
};

export const deleteCart = (id) => {
  return {
    type: 'DELETE_CART',
    payload: { 
      id: id,
     },
  };
};



