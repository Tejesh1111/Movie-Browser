import "./CategoryFilter.css";

function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {

  const categories = [

    "Home",

    "Trending",

    "Action",

    "Drama",

    "Horror",

    "Romance",

    "Thriller",
  ];

  return (

    <div className="category-container">

      {categories.map((category) => (

        <button
          key={category}

          className={
            selectedCategory === category
            ? "active-category"
            : ""
          }

          onClick={() =>
            setSelectedCategory(category)
          }
        >

          {category}

        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;