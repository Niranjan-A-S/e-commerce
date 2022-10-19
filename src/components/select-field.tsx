interface ISelect {
  options: Array<IOption>;
  className?: string;
}

interface IOption {
  label: string;
  value: string;
}

export const SelectField = (props: ISelect) => {
  const { options, className } = props;

  return (
    <select className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
