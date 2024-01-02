import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Cars from "./db/data";
import Recommended from "./Recommended/Recommended";
import Card from "./Card";
import Container from "../container/Container";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = Cars.filter(
    (product) => product.Make.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(Cars, selected, query) {
    let filteredProducts = Cars;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ Category, Color, Make, NewPrice, Model, Year, Engine, Doors }) =>
          Category === selected ||
          Color === selected ||
          Make === selected ||
          NewPrice === selected ||
          Model === selected ||
          Year == selected ||
          Engine == selected ||
          Doors == selected
      );
    }

    return filteredProducts.map(
      ({
        objectId,
        Img,
        Make,
        Model,
        Star,
        Reviews,
        NewPrice,
        Year,
        Engine,
        Doors,
      }) => (
        <Card
          key={objectId}
          Img={Img}
          Make={Make}
          Star={Star}
          Year={Year}
          Reviews={Reviews}
          NewPrice={NewPrice}
          Model={Model}
          Engine={Engine}
          Doors={Doors}
        />
      )
    );
  }

  const result = filteredData(Cars, selectedCategory, query);

  return (
    <>
      <Container>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </Container>
    </>
  );
}

export default App;
