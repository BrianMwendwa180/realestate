import React from "react";

function FilterProperties({ filterValueSelected }) {
  return (
    <div className="filter-properties">
      <img src="path/to/filter-icon.jpg" alt="Filter Icon" />
      <button onClick={() => filterValueSelected("1")}>1 Bedroom</button>
      <button onClick={() => filterValueSelected("2")}>2 Bedrooms</button>
      <button onClick={() => filterValueSelected("3")}>3 Bedrooms</button>
      <button onClick={() => filterValueSelected("4")}>4 Bedrooms</button>
      <a href="/more-filters" alt="More Filters">More Filters</a>
    </div>
  );
}

export default FilterProperties;
