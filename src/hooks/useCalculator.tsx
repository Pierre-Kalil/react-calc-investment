import { useEffect, useState } from "react";
import { api } from "../api/api";
import { ITaxas } from "../types/types";

export const useCalculator = (investedAmount: number, time: number) => {
  const [taxas, setTaxas] = useState<ITaxas[]>([]);
  const [returnInvested, setReturnInvested] = useState(0);

  useEffect(() => {
    api
      .get("/taxas/v1")
      .then((res) => setTaxas(res.data))
      .catch((err) => console.log(err));
  }, [investedAmount, time]);

  console.log(taxas);
  setTimeout(() => {
    const taxa = taxas.find((taxa) => taxa.nome === "Selic");
    if (taxa) {
      setReturnInvested(
        investedAmount * ((taxa.valor / 12 / 100) * time) + investedAmount
      );
    }
  }, 500);

  return {
    returnInvested,
  };
};
