// store.js
import React, { createContext, useReducer } from "react";
import { getProducts, setProducts, addToCart } from "./Actions";

const initialState = {
  total: 0,
  cart: [],
  products: [],
};

export const store = createContext(initialState);
const { Provider } = store;

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case getProducts.type: {
        return state;
      }
      case setProducts.type: {
        const newState = {
          ...state,
          products: action.payload,
        };
        return newState;
      }

      case addToCart.type: {
        const newState = {
          ...state,
          cart: [...state.cart, action.payload],
          total:state.total+action.payload.price
        };
        return newState;
      }
      default:
        // throw new Error();
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
