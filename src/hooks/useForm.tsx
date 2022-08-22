import { useState } from "react";
import { ILogin, IUseCalculatorProps } from "../types/types";

export const useForm = (
  callBack: () => Promise<void>,
  initialState: IUseCalculatorProps | ILogin
) => {
  const [values, setValues] = useState<IUseCalculatorProps | ILogin>(
    initialState
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callBack();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
