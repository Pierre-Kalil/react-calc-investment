import { IButtonPropos } from "../../types/types";
import { ButtonContainer } from "./styles";

export const Button = ({ children, type }: IButtonPropos) => {
  return <ButtonContainer type="submit">{children}</ButtonContainer>;
};
