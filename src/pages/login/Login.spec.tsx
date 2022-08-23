import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Login } from ".";
import { Button } from "../../components/button";

describe("Login Form", () => {
  const setup = () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  };

  test("email input should be rendered", () => {
    setup();

    const emailInputEl = screen.getByPlaceholderText(/Email/i);
    expect(emailInputEl).toBeTruthy();
  });

  test("password input should be rendered", () => {
    setup();

    const passwordInputEl = screen.getByPlaceholderText(/Senha/i);
    expect(passwordInputEl).toBeTruthy();
  });

  test("enviar button should be rendered", () => {
    setup();
    render(<Button children="Enviar" type="submit" />);

    const ennviarButtonEl = screen.getByText("Enviar");
    expect(ennviarButtonEl).toBeTruthy();
  });
});
