import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Login } from ".";

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

  test("entrar button should be rendered", () => {
    setup();

    const ennviarButtonEl = screen.getByRole("button", { name: /Entrar/i });
    expect(ennviarButtonEl).toBeTruthy();
  });
});
