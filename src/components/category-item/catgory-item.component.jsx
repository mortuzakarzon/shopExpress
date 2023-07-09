import "./catgory-item.styles.scss";


const CatgoryItem = ({ category }) => {
  const { title, imageUrl, id } = category
  return (<div className="category-container" >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="category-body-container">
      <h2 key={id}>{title}</h2>
      <p>Shop Now</p>
    </div>
  </div>)

}


export default CatgoryItem;
