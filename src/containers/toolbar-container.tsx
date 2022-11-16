import { ChangeEvent, useCallback } from "react";
import styled from "styled-components";
import { sortValueChanged, viewChanged } from "../features/filters";
import { useAppDispatch } from "../redux";

const sortOptions = [
  {
    label: "Price: High to Low",
    value: "highToLow",
  },
  {
    label: "Price: Low to High",
    value: "lowToHigh",
  },
];

const viewOptions = [
  {
    label: "Grid View",
    value: "grid",
  },
  {
    label: "List View",
    value: "list",
  },
];

export const Toolbar = () => {
  const dispatch = useAppDispatch();

  const changeView = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(viewChanged(event.target.value));
    },
    [dispatch]
  );

  const changeSortValue = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(sortValueChanged(event.target.value));
    },
    [dispatch]
  );

  return (
    <ToolbarWrapper>
      <Select onChange={changeView}>
        {viewOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <Select onChange={changeSortValue}>
        {sortOptions.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 100px;
  padding-bottom: 0;
  grid-gap: 10px;
  @media screen and (max-width: 500px) {
    padding: 100px 80px 0 80px;
  }
`;

const Select = styled.select`
  justify-self: end;
  padding: 5px;
  font-size: 18px;
`;
