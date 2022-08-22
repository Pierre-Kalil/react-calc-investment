import { IFormProps } from "../../types/types";
import { Button } from "../button";
import { Input } from "../input";
import { FormContainer } from "./styles";

export const Form = ({
  placeholder1,
  placeholder2,
  children,
  name1,
  name2,
  type1,
  type2,
  onChange,
  onSubmit,
}: IFormProps) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Input
        name={name1}
        type={type1}
        placeholder={placeholder1}
        onChange={onChange}
      />
      <Input
        name={name2}
        type={type2}
        placeholder={placeholder2}
        onChange={onChange}
      />
      <Button type="submit" children={children} />
    </FormContainer>
  );
};
