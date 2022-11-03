import { memo } from "react";

import { ISelect } from "../types";

export const SelectField = memo((props: ISelect) => {
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
});
