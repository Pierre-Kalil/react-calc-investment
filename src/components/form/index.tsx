import { useForm } from "../../hooks/useForm";
import { IFormProps } from "../../types/types";
import { Button } from "../button";
import { Input } from "../input";
import { FormContainer } from "./styles";

export const Form = ({ placeholder1, placeholder2, children }: IFormProps) => {
  const initialState = {
    email: "",
    password: "",
  };

  const loginCallback = async () => {
    console.log("redirecionamento");
    console.log(values);
  };

  const { onChange, onSubmit, values } = useForm(loginCallback, initialState);

  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        placeholder={placeholder1}
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder={placeholder2}
        type="password"
        onChange={onChange}
      />
      <Button type="submit" children={children} />
    </FormContainer>
  );
};
