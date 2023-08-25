import DirectoryItem from "../directory-item/directory-item.component";
import "./directory-component.styles.scss";


const Directory = ({ categories }) => {


  return (<div className="directory-container">
    {categories.map((category) => {
      return <DirectoryItem category={category} key={category.id} />;
    })}
  </div>)
}


export default Directory;