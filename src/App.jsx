import "./App.scss";
import CardList from "./components/CardList/CardList";
import NavBar from "./containers/NavBar/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    // SET THE VARIABLE TO THE URL YOU WILL USE NO MATTER WHAT
    let url = "https://api.punkapi.com/v2/beers?";
    // IF YOU NEED TO ADD THE QUERY PARAM ONTO THE END OF IT
    if (filter === "high abv (> 6.0%)") {
      url += "&abv_gt=6";
    }
    // IF YOU NEED TO ADD THE QUERY PARAM ONTO THE END OF IT
    if (filter === "classic range") {
      url += "&brewed_before=12-2010";
    }
    // THIS MEANS THAT THE URL VARIABLE CAN BE EITHER OF THE FOLLOWING
    const result = await fetch(url);
    const beerData = await result.json();
    setBeers(beerData);

    if (filter === "acidic(ph < 4)") {
      const highAcidity = beerData.filter((beer) => {
        const acidity = beer.ph < 4 && beer.ph !== null;
        return acidity;
      });
      setBeers(highAcidity);
    } else {
      setBeers(beerData);
    }
  };

  const handleOnChange = (event) => {
    if (event.target.checked) {
      setFilter(event.target.value);
    } else {
      setFilter("");
    }
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(handleInput);
  };

  const filteredBeers = beers.filter((search) => {
    const beersLower = search.name.toLowerCase();
    return beersLower.includes(searchTerm);
  });

  useEffect(() => {
    getBeers();
  }, [filter]);

  return (
    <div className="app">
      <NavBar
        handleInput={handleInput}
        searchTerm={searchTerm}
        handleOnChange={handleOnChange}
        selected={filter}
      />
      <div data-testid="beers">
        <CardList beerArr={filteredBeers} />
      </div>
    </div>
  );
}

export default App;
