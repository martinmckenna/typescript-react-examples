import { InputHTMLAttributes } from "react";
// import { Props as ModalProps } from "react-modal";

/* we can also make ID required by using Omit */
interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string | number;
  id: string;
}

const DebouncedInput = (props: Props) => {
  const { label, id, onChange, ...rest } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} onChange={onChange} {...rest} />
    </>
  );
};

export default DebouncedInput;
