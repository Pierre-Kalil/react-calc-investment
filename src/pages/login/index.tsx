import { Form } from "../../components/form";
import { LoginContainer } from "./styles";

export const Login = () => {
  return (
    <LoginContainer>
      <Form placeholder1="Email" placeholder2="Senha" children="Entrar" />
    </LoginContainer>
  );
};
