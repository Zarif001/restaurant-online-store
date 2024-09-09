// actions.js
import { productActions } from "./index";

export const fetchDates = () => {
  return async (dispatch) => {
    dispatch(productActions.fetchPending());
    const getData = async () => {
      const response = await fetch('https://restaurant-6b45b-default-rtdb.firebaseio.com/data.json');
      if (!response.ok) {
        throw new Error('Error with getting data');
      }
      return await response.json();
    };

    try {
      const data = await getData();
      dispatch(productActions.fetchSuccess()); // Устанавливаем статус успеха
      dispatch(productActions.fetchDataGet(data));
    } catch (error) {
      dispatch(productActions.fetchError()); // Устанавливаем статус ошибки
      console.error('Error:', error);
    }
  };
};

export const putFetchingData = (cartItems) => {
  return async (dispatch) => {

    try {
      await fetch(
        'https://restaurant-6b45b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartItems),
        }
      );
    } catch (error) {
      dispatch(productActions.fetchError()); // Устанавливаем статус ошибки
      console.error('error', error);
    }
  };
};

export const cartFetchDates = () => {
  return async (dispatch) => {
    dispatch(productActions.fetchPending());
    const getData = async () => {
      const response = await fetch('https://restaurant-6b45b-default-rtdb.firebaseio.com/cart.json');
      if (!response.ok) {
        throw new Error('Error with getting data');
      }
      return await response.json();
    };

    try {
      const data = await getData();
      dispatch(productActions.fetchSuccess()); // Устанавливаем статус успеха
      dispatch(productActions.fetchCartItemsGet(data));
    } catch (error) {
      dispatch(productActions.fetchError()); // Устанавливаем статус ошибки
      console.error('Error:', error);
    }
  };
};

export const deleteItemFromDB = (id) => {
  return async (dispatch, getState) => {
    dispatch(productActions.removeItem(id));

    try {
      const response = await fetch('https://restaurant-6b45b-default-rtdb.firebaseio.com/cart.json');
      const data = await response.json();

      if (data) {
        const updatedCart = data.filter((item) => item.id !== id);
        await fetch('https://restaurant-6b45b-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(updatedCart),
        });
      }
    } catch (error) {
      console.error('Ошибка при удалении элемента из базы данных:', error);
      const previousCartItems = getState().products.cartItems;
      dispatch(productActions.setCartItems(previousCartItems));
    }
  };
};


export const clearFetchData = () =>{
  return async(dispatch) =>{
   try {
    dispatch(productActions.fetchPending())
    dispatch(productActions.clearItems())
    await fetch('https://restaurant-6b45b-default-rtdb.firebaseio.com/cart.json', {
      method: 'DELETE'
    })
    dispatch(productActions.fetchSuccess())
   } catch (error) {
    console.error('error', error)
   }

  }
}