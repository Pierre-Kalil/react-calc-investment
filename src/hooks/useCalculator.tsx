import { useEffect, useState } from "react";
import { api } from "../api/api";
import { ITaxas, IUseCalculatorProps } from "../types/types";

export const useCalculator = ({
  investedAmount,
  time,
}: IUseCalculatorProps) => {
  const [taxas, setTaxas] = useState<ITaxas[]>([]);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    api
      .get("/taxas/v1")
      .then((res) => setTaxas(res.data))
      .catch((err) => console.log(err));
  }, [investedAmount, time]);

  setTimeout(() => {
    const taxa = taxas.find((taxa) => taxa.nome === "Selic");
    if (taxa) {
      setRoi(
        investedAmount * ((taxa.valor / 12 / 100) * time) + investedAmount
      );
    }
  }, 500);

  return {
    roi,
  };
};
