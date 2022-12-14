import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterButtons from "../../components/FilterButtons/FilterButtons";

const NavBar = ({ handleInput, searchTerm, handleOnChange, selected }) => {
  const options = ["High ABV (> 6.0%)", "Classic Range", "Acidic(ph < 4)"];

  return (
    <div className="nav-bar">
      <SearchBox
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FilterButtons
        onChange={handleOnChange}
        selected={selected}
        options={options}
        label=" "
      />
    </div>
  );
};

export default NavBar;
