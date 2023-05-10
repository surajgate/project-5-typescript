import React from "react";

interface CategoriesPropType {
    categories : string[];
    filterItems(categories : string) : void;
}

const Categories = ({ categories, filterItems }: CategoriesPropType) => {
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              className="filter-btn"
              type="button"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
