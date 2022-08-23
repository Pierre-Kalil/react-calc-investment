import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Home } from ".";
import { Button } from "../../components/button";

describe("Login Form", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  };

  afterAll(() => {
    render(<Button children="" type="submit" />);
  });

  test("investedAmount input should be rendered", () => {
    setup();

    const investedAmountInputEl =
      screen.getByPlaceholderText(/Valor investido/i);
    expect(investedAmountInputEl).toBeTruthy();
  });

  test("password input should be rendered", () => {
    setup();

    const timeInputEl = screen.getByPlaceholderText(/Tempo em meses/i);
    expect(timeInputEl).toBeTruthy();
  });

  test("enviar button should be rendered", () => {
    setup();

    const ennviarButtonEl = screen.getByRole("button", { name: /Calcular/i });
    expect(ennviarButtonEl).toBeTruthy();
  });
});
