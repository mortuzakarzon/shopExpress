import "./App.css";

const categories = [
  {
    id: 1,
    title: "Hats",
  },
  {
    id: 2,
    title: "Jackets",
  },
  {
    id: 3,
    title: "Hats",
  },
  {
    id: 4,
    title: "Hats",
  },
  {
    id: 5,
    title: "Hats",
  },
];

function App() {
  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
        return (
          <div className="category-container">
            <div className="background-image" />
            {/* <img /> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
