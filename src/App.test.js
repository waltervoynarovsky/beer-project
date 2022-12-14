import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should render the search bar", () => {
    render(<App />);
    const searchBar = screen.getByText("Search beers:");
    expect(searchBar).toBeInTheDocument();
  });

  it("should render the filters", () => {
    render(<App />);
    const filters = screen.getByText(
      "High abv (> 6.0%)" && "Classic range" && "Acidic(ph < 4)"
    );
    expect(filters).toBeInTheDocument();
  });

  it("should render the beers", () => {
    render(<App />);
    const beers = screen.queryByTestId("beers");
    expect(beers).toBeInTheDocument();
  });
});
