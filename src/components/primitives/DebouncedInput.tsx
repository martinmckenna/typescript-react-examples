import { ChangeEvent } from "react";

interface Props {
  label: string | number;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DebouncedInput = (props: Props) => {
  const { label, id, onChange } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} onChange={onChange} />
    </>
  );
};

export default DebouncedInput;
