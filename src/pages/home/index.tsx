import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./styles";
import { Form } from "../../components/form";
import { IUseCalculatorProps } from "../../types/types";
import { useForm } from "../../hooks/useForm";
import { useCalculator } from "../../hooks/useCalculator";

export const Home = () => {
  const navigate = useNavigate();

  const initialState: IUseCalculatorProps = {
    investedAmount: 0,
    time: 0,
  };

  const callBack = async () => {
    localStorage.setItem("investedAmount", values["investedAmount"] || "");
    localStorage.setItem("time", values["time"] || "");
    localStorage.setItem(
      "result",
      returnInvested.toFixed(2).replace(".", ",") || ""
    );
    navigate("/result");
  };

  const { onChange, onSubmit, values } = useForm(callBack, initialState);

  const { returnInvested } = useCalculator(
    Number(values["investedAmount"]),
    Number(values["time"])
  );

  return (
    <HomeContainer>
      <div className="header">
        <h1>Faça uma simulação de investimento com base na taxa Selic</h1>
        <p>Informe o valor que pretende investir</p>
        <p>E o período, em meses, para receber investimento </p>
      </div>
      <Form
        placeholder1="Valor Investido"
        placeholder2="Tempo em meses"
        children="Calcular"
        callBack={callBack}
        initialState={initialState}
        name1="investedAmount"
        type1="number"
        name2="time"
        type2="number"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </HomeContainer>
  );
};
