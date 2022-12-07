import "./App.scss";
import CardList from "./components/CardList/CardList";
import beer from "./data/beers";
import NavBar from "./containers/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <CardList beerArr={beer} />
    </div>
  );
}

export default App;
