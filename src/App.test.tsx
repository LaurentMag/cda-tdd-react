import React from "react";
// surcouche a jest qui permet de tester le react
import {render, screen} from "@testing-library/react";
import App from "./App";

// recup l'element qui contient le test
test("renders learn react link", () => {
  // rendu du composant dans le test bed ( conteneur de test  => en gros une div dans laquelle on monte les elements pour les tester )
  render(<App />);
  // recup de elem qui contient le text "learn react"
  // "i" modifier specifies a case-insenitive match
  // le .screen c'est le test bed et il va faire le render dans screen.
  const linkElement = screen.getByText(/learn react/i);
  // on test que l'elem est présent dans le DOM
  expect(linkElement).toBeInTheDocument();
});
