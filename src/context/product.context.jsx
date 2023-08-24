import { createContext, useState, useEffect } from "react";
import { addCollectionDocument } from "../utils/firebase/firebase.utils.js";


import SHOP_DATA from "../shopdata.js";



export const ProductsContext = createContext({
  products: []

});

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    addCollectionDocument("categories", SHOP_DATA)
  }, []);

  const value = { products };

  return (<ProductsContext.Provider value={value}>
    {children}
  </ProductsContext.Provider>)
}

