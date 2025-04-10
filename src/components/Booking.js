import React, { useState } from "react";
import Property from "./Property";
import AddProperty from "./AddProperty";
import FilterProperties from "./FilterProperties";

function Booking() {
  const bookingComponent = [
    {
      title: "Book a house tour to find your dream place!",
    },
  ];

  const defaultProperties = [
    {
      id: 1,
      imgSrc: "path/to/image1.jpg",
      address: "123 Main St",
      price: 300000,
      description: "A beautiful house with 3 bedrooms.",
      bedsCount: "3",
    },
    {
      id: 2,
      imgSrc: "path/to/image2.jpg",
      address: "456 Elm St",
      price: 250000,
      description: "A cozy apartment with 2 bedrooms.",
      bedsCount: "2",
    },
    {
      id: 3,
      imgSrc: "path/to/image3.jpg",
      address: "789 Oak St",
      price: 400000,
      description: "A spacious villa with 4 bedrooms.",
      bedsCount: "4",
    },
  ];

  const [properties, setProperties] = useState(defaultProperties);
  const [selectFilterValue, updateSelectFilter] = useState("all");
  const [inputFilterValue, updateInputFilter] = useState("");
  const [sortOption, setSortOption] = useState("bestMatch");

  const onFilterValueSelected = (filterValue) => {
    updateSelectFilter(filterValue);
  };

  const onInputFilterChange = (e) => {
    updateInputFilter(e.target.value);
  };

  const handleAddProperty = (newProperty) => {
    setProperties((prevState) => [...prevState, newProperty]);
  };

  const lowestFirstSort = [...properties].sort((property1, property2) => {
    return property1.price - property2.price;
  });

  const highestFirstSort = [...properties].sort((property1, property2) => {
    return property2.price - property1.price;
  });

  const filteredProperties = properties.filter((property) => {
    if (selectFilterValue === "1") return property.bedsCount === "1";
    if (selectFilterValue === "2") return property.bedsCount === "2";
    if (selectFilterValue === "3") return property.bedsCount === "3";
    if (selectFilterValue === "4") return property.bedsCount === "4";
    return property;
  });

  const filteredInputProperties = filteredProperties.filter((property) => {
    return (
      inputFilterValue.toLowerCase() === "" ||
      property.address.toLowerCase().includes(inputFilterValue.toLowerCase()) ||
      property.description.toLowerCase().includes(inputFilterValue.toLowerCase())
    );
  });

  const filteredLowestSortedProperties = lowestFirstSort.filter((property) =>
    filteredInputProperties.includes(property)
  );

  const filteredHighestSortedProperties = highestFirstSort.filter((property) =>
    filteredInputProperties.includes(property)
  );

  const filteredPropertiesDisplay = filteredInputProperties.map((p) => (
    <Property key={p.id} property={p} />
  ));

  const lowestFirstSortedPropertiesDisplay = filteredLowestSortedProperties.map(
    (p) => <Property key={p.id} property={p} />
  );

  const highestFirstSortedPropertiesDisplay =
    filteredHighestSortedProperties.map((p) => (
      <Property key={p.id} property={p} />
    ));

  return (
    <>
      {bookingComponent.map((b, id) => (
        <div key={id}>
          <section id="house-tours" className="booking-section">
            <section className="booking-section-title">
              <h3>{b.title}</h3>
            </section>
            <div className="filter-area">
              <input
                className="filter-input"
                onChange={onInputFilterChange}
                placeholder="Type to filter properties"
              />
              <FilterProperties filterValueSelected={onFilterValueSelected} />
              <select
                className="bedrooms-list filter-select"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
              >
                <option value="bestMatch">Best Match</option>
                <option value="lowestFirst">Price (Lowest First)</option>
                <option value="highestFirst">Price (Highest First)</option>
              </select>
            </div>
            <section className="house-section">
              {sortOption === "bestMatch"
                ? filteredPropertiesDisplay
                : sortOption === "lowestFirst"
                ? lowestFirstSortedPropertiesDisplay
                : sortOption === "highestFirst"
                ? highestFirstSortedPropertiesDisplay
                : filteredPropertiesDisplay}
            </section>
          </section>
          <AddProperty onAddProperty={handleAddProperty} />
        </div>
      ))}
    </>
  );
}

export default Booking;
