import { useNavigate } from "react-router-dom";
import { Form } from "../../components/form";
import { useForm } from "../../hooks/useForm";
import { ILogin } from "../../types/types";
import { LoginContainer } from "./styles";
import login from "../../assets/login.png";

import toast from "react-hot-toast";
import { DB } from "../../db";

export const Login = () => {
  const navigate = useNavigate();
  const initialState: ILogin = {
    email: "",
    password: "",
  };

  const callBack = async () => {
    if (
      DB[0]["email"] === values["email"] &&
      DB[0]["password"] === values["password"]
    ) {
      toast.success(`Bem vindo, ${DB[0].name}`);
      return navigate("/home");
    }
    toast.error("Erro");
  };

  const { onChange, onSubmit, values } = useForm(callBack, initialState);

  return (
    <LoginContainer>
      <div className="login-image">
        <img src={login} alt="image_login" />
      </div>
      <div className="login-form">
        <h1>Faça Login</h1>
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
      </div>
    </LoginContainer>
  );
};
