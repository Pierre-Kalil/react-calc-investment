export interface IUseCalculatorProps {
  time: number;
  investedAmount: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITaxas {
  nome: string;
  valor: number;
}

export interface IFormProps {
  children?: string;
  placeholder1?: string;
  placeholder2?: string;
  initialState?: IUseCalculatorProps | ILogin;
  callBack?: () => Promise<void>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  name1?: string;
  name2?: string;
  type1?: string;
  type2?: string;
}

export interface IInputProps {
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButtonPropos {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
}
