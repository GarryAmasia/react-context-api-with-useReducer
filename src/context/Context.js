import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

const contextWrapped = createContext();
// faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.name.fullName(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(300, 300, true),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  //   console.log(products);

  //   const [state,dispatch] = useReducer(reducer,initialState) ==> this is useReducer initial formula
  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
  });

  return (
    <contextWrapped.Provider value={{ state, dispatch }}>
      {children}
    </contextWrapped.Provider>
  );
};

export default Context;

export const CartState = () => useContext(contextWrapped);
