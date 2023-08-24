
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesMap.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";


const CatgoriesPreview = () => {

  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </>

  )
}


export default CatgoriesPreview;