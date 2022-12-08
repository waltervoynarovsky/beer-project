import "./NavBar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import RadioButtons from "../../components/RadioButtons/RadioButtons";

const NavBar = ({ handleInput, searchTerm, handleOnChange, selected }) => {
  const options = ["High ABV (> 6.0%)", "Classic Range", "Acidic(ph < 4)"];

  return (
    <div className="nav-bar">
      <SearchBox
        label="Search"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <RadioButtons
        onChange={handleOnChange}
        selected={selected}
        options={options}
        label=" "
      />
    </div>
  );
};

export default NavBar;
