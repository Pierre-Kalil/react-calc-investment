import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

test("button", async () => {
  render(<Button children="Enviar" type="submit" />);

  expect(screen.getByText("Enviar")).toBeTruthy();
});
