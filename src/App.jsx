import "./App.scss";
import CardList from "./components/CardList/CardList";
import beer from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(handleInput);
  };
  const filtered = beer.filter((beer) => {
    if (filter === "high abv (> 6.0%)") {
      console.log("condition met");
      const highAbv = beer.abv > 6;
      return highAbv;
    } else if (filter === "classic range") {
      const classicRange = Number(beer.first_brewed.slice(3)) < 2010;
      return classicRange;
    } else if (filter === "acidic(ph < 4)") {
      const acidity = beer.ph < 4;
      return acidity;
    }

    const beerLowerCase = beer.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  });
  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    console.log("users has updated");
  }, [filter]);

  // store whether checkbox is clicked or not
  //

  return (
    <div className="app">
      <NavBar
        handleInput={handleInput}
        searchTerm={searchTerm}
        handleOnChange={handleOnChange}
        selected={filter}
      />
      <CardList beerArr={filtered} />
    </div>
  );
}

export default App;
