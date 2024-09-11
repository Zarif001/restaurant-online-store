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

    const loadImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;  // Успешная загрузка
            img.onerror = reject;  // Ошибка при загрузке
          });
        })
      );
    };

    try {
      const data = await getData();
      dispatch(productActions.fetchDataGet(data));

      const imageUrls = data.map(item => item.imageUrl); // Пример, если в каждом объекте есть поле imageUrl

      await loadImages(imageUrls);

      dispatch(productActions.fetchSuccess()); // Устанавливаем статус успеха
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