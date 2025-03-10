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
    // Property data...
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
    property1 = property1.price;
    property2 = property2.price;

    if (property1 < property2) {
      return -1;
    }
    if (property1 > property2) {
      return 1;
    }
    return 0;
  });

  const highestFirstSort = [...properties].sort((property1, property2) => {
    property1 = property1.price;
    property2 = property2.price;

    if (property1 > property2) {
      return -1;
    }
    if (property1 < property2) {
      return 1;
    }
    return 0;
  });

  const filteredProperties = properties.filter((property) => {
    if (selectFilterValue === "1") {
      return property.bedsCount === "1";
    } else if (selectFilterValue === "2") {
      return property.bedsCount === "2";
    } else if (selectFilterValue === "3") {
      return property.bedsCount === "3";
    } else if (selectFilterValue === "4") {
      return property.bedsCount === "4";
    } else {
      return property;
    }
  });

  const InputFilteredProperties = properties.filter((property) => {
    if (inputFilterValue.toLowerCase() === "") {
      return property;
    } else if (
      property.address.toLowerCase().includes(inputFilterValue.toLowerCase())
    ) {
      return property;
    } else if (
      property.description
        .toLowerCase()
        .includes(inputFilterValue.toLowerCase())
    ) {
      return property;
    }
  });

  const filteredLowestSortedProperties = lowestFirstSort.filter((property) =>
    filteredProperties.includes(property)
  );

  const filteredHighestSortedProperties = highestFirstSort.filter((property) =>
    filteredProperties.includes(property)
  );

  const propertiesListDisplay = properties.map((p) => (
    <Property key={p.id} property={p} />
  ));

  const filteredPropertiesDisplay = filteredProperties.map((p) => (
    <Property key={p.id} property={p} />
  ));

  const lowestFirstSortedPropertiesDisplay = filteredLowestSortedProperties.map(
    (p) => <Property key={p.id} property={p} />
  );

  const highestFirstSortedPropertiesDisplay =
    filteredHighestSortedProperties.map((p) => (
      <Property key={p.id} property={p} />
    ));

  const bookingComponentDisplay = bookingComponent.map((b, id) => (
    <div key={id}>
      <section id="house-tours" className="booking-section">
        <section className="booking-section-title">
          <h3>{b.title}</h3>
        </section>
        <div className="filter-area">
          <input
            className="filter-input"
            onChange={onInputFilterChange}
            placeholder="type to filter properties"
          ></input>
          <FilterProperties filterValueSelected={onFilterValueSelected} />
          <select
            className="bedrooms-list filter-select"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="bestMatch">best match</option>
            <option value="lowestFirst">price (lowest first)</option>
            <option value="highestFirst">price (highest first)</option>
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
  ));

  return <>{bookingComponentDisplay}</>;
}

export default Booking;
