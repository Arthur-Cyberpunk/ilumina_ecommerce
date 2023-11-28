import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../../redux/store';
import NavBar from "./";

beforeEach(() => {
    window.scrollTo = jest.fn();
  });

test("redireciona para /categories/all ao clicar no link", async () => {
  // Renderiza o componente envolvido no Router
  render(
    <Provider store={store}>
      <Router>
        <NavBar />
      </Router>
    </Provider>
  );

  const link = screen.queryAllByText("categories");

  fireEvent.click(link[0]);
    
  expect(window.location.pathname).toBe("/categories/all");

  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

});
