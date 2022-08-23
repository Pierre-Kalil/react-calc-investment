import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  test("button", async () => {
    render(<Button children="Enviar" type="submit" />);

    expect(screen.getByText("Enviar")).toBeTruthy();
  });
});
