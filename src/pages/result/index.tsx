import { Link } from "react-router-dom";
import { ResultContainer } from "./styles";

export const Result = () => {
  const items = {
    investedAmount: localStorage.getItem("investedAmount") || "",
    time: localStorage.getItem("time") || "",
    result: localStorage.getItem("result") || "",
  };

  console.log(items);

  return (
    <ResultContainer>
      <Link to="/home">Nova simulação</Link>
      <div className="card-result">
        <h1>Resultado após o periodo aplicado</h1>
        <h3>Valor investido </h3>
        <h2>
          {">"} R$ {items.investedAmount},00
        </h2>
        <h3>Tempo de rendimento</h3>
        <h2>
          {">"} {items.time} meses
        </h2>

        <h3>Valor total após o periodo de rentabilidade </h3>
        <h2>
          {">"} R$ {items.result}
        </h2>
      </div>
    </ResultContainer>
  );
};
