import { ChangeEvent } from "react";

interface Option {
  label: string;
  value: string;
}

/*
  options here can be an array of objects, array of numbers,
  or array of strings
*/
interface Props<PassedOption extends Option | string | number> {
  label: string | number;
  id: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: PassedOption[];
  selectedOption: PassedOption;
}

const Select = <T extends Option | string | number>(props: Props<T>) => {
  const { label, id, onChange, options, selectedOption } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        onChange={onChange}
        defaultValue={
          typeof selectedOption === "object"
            ? selectedOption?.label
            : selectedOption
        }
      >
        {options.map((eachOption) => {
          // const safeOption = typeof eachOption === "object" ? eachOption?.label : eachOption
          return (
            <option
              value={
                typeof eachOption === "object" ? eachOption?.label : eachOption
              }
              key={
                typeof eachOption === "object" ? eachOption?.label : eachOption
              }
            >
              {typeof eachOption === "object" ? eachOption?.label : eachOption}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
