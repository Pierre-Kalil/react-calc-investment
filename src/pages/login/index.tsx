import { useNavigate } from "react-router-dom";
import { Form } from "../../components/form";
import { useForm } from "../../hooks/useForm";
import { ILogin } from "../../types/types";
import { LoginContainer } from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const initialState: ILogin = {
    email: "",
    password: "",
  };

  const callBack = async () => {
    navigate("/home");
  };

  const { onChange, onSubmit } = useForm(callBack, initialState);

  return (
    <LoginContainer>
      <Form
        placeholder1="Email"
        placeholder2="Senha"
        children="Entrar"
        callBack={callBack}
        initialState={initialState}
        name1="email"
        type1="email"
        name2="password"
        type2="password"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </LoginContainer>
  );
};
