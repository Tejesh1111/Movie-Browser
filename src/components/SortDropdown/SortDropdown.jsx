import "./SortDropdown.css";

function SortDropdown({ sortOption, setSortOption }) {

  return (

    <div className="sort-container">

      <label>Sort by</label>

      <select
        value={sortOption}
        onChange={(e) =>
          setSortOption(e.target.value)
        }
      >

        <option value="popularity">
          Popularity
        </option>

        <option value="ratingHigh">
          Rating: High → Low
        </option>

        <option value="ratingLow">
          Rating: Low → High
        </option>

        <option value="newest">
          Release: Newest
        </option>

        <option value="oldest">
          Release: Oldest
        </option>

        <option value="titleAZ">
          Title: A → Z
        </option>

        <option value="titleZA">
          Title: Z → A
        </option>

      </select>

    </div>
  );
}

export default SortDropdown;