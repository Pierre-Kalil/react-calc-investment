import { IInputProps } from "../../types/types";
import { InputContainer } from "./styles";

export const Input = ({ placeholder, onChange, name, type }: IInputProps) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
      />
    </InputContainer>
  );
};
