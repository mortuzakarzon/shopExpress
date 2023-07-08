import "./App.css";

const categories = [
  {
    id: 1,
    title: "Hats",
  },
];

function App() {
  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          {categories.map((category) => {
            return <h2 key={category.id}>{category.title} </h2>;
          })}
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img /> */}
        <div className="category-body-container">
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default App;
