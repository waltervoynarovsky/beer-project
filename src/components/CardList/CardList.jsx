import "./CardList.scss";

const CardList = (props) => {
  const { beerArr } = props;

  const beerCards = beerArr.map((beerObject, index) => {
    return (
      <div className="beer-card" key={beerObject.id}>
        <img
          className="beer-card__img"
          src={beerObject.image_url}
          alt="beer img"
        />
        <h2>{beerObject.name}</h2>
        <h3>{beerObject.description}</h3>
        <div className="p-tags">
          <p>First Brewed: {beerObject.first_brewed}</p>
          <p>ABV: {beerObject.abv}</p>
          <p>pH: {beerObject.ph}</p>
        </div>
      </div>
    );
  });
  console.log(beerCards);
  return (
    <div>
      <div className="beer-grid">{beerCards}</div>
    </div>
  );
};
export default CardList;
