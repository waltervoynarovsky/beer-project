import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    let url = "";

    if (filter === "high abv (> 6.0%)") {
      url = `https://api.punkapi.com/v2/beers/?abv_gt=6`;
    } else if (filter === "classic range") {
      url = `https://api.punkapi.com/v2/beers/?brewed_before=12-2010`;
    } else if (filter === "acidic(ph < 4)") {
      const acidity = beers.ph < 4;
      return acidity;
    } else {
      url = `https://api.punkapi.com/v2/beers`;
    }
    const result = await fetch(url);
    const beerData = await result.json();
    setBeers(beerData);

    const beerLowerCase = beerData.name.toLowerCase();
    return beerLowerCase.includes(searchTerm);
  };
  const handleOnChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    getBeers();
  }, [filter]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(handleInput);
  };
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
      <CardList beerArr={beers} />
    </div>
  );
}

export default App;
