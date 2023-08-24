import { createContext, useState, useEffect } from "react";
import { getCatgoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categories: {}

});

export const CategoriesProvider = ({ children }) => {

  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCatgoreisMap = async () => {
      const categoryMap = await getCatgoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    }
    getCatgoreisMap();
  }, []);

  const value = { categoriesMap };

  return (<CategoriesContext.Provider value={value}>
    {children}
  </CategoriesContext.Provider>)
}

