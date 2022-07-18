import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  jest.restoreAllMocks();
  document.body.removeChild(container);
  container = null;
});
import CardPokemon from "../Card";
import { pokemonImage } from "../../Utils/helpers";
const data = {
  ...{
    name: "Pokemon",
    url: "http://localhost:3001/pokemon/3",
  },
};
test("should be render data pokemon", async () => {
  await act(
    async () =>
      render(<CardPokemon pokemon={data} />, {
        wrapper: MemoryRouter,
      }),
    container
  );
  let url = pokemonImage("http://localhost:3001/pokemon/3");
  expect(screen.getByRole("pokemonPhoto")).toHaveAttribute("src", url);
  expect(screen.getByRole("pokemonName")).toHaveTextContent("Pokemon");
});
