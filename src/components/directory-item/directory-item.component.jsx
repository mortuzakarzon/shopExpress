import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;
  return (
    <div className="directory-item-container">

      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="body">
        <a href={`/shop/${title}`}>
          <h2 className="title" key={id}>
            {title.toUpperCase()}
          </h2>
          <p>Shop Now</p>
        </a>
      </div>

    </div>
  );
};

export default DirectoryItem;
