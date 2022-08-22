export interface IUseCalculatorProps {
  time: number;
  investedAmount: number;
}

export interface ITaxas {
  nome: string;
  valor: number;
}

export interface IFormProps {
  children: string;
  placeholder1: string;
  placeholder2: string;
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
