import CatgoryItem from "../category-item/catgory-item.component";
import "./directory-component.styles.scss";

const Directory = ({ categories }) => {


  return (<div className="directory-container">
    {categories.map((category) => {
      return <CatgoryItem category={category} />;
    })}
  </div>)
}


export default Directory;