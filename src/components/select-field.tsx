import { ISelect } from "../types";

export const SelectField = (props: ISelect) => {
  const { options, className, onChange } = props;

  return (
    <select className={className} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
