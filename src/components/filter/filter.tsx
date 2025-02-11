//#region IMPORTS
import { ChangeEvent, ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import { BACKGROUND_COLOR, SECONDART_COLOR, TEXT_COLOR } from "../../style/variables";
//#endregion

//#region STYLES
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  min-width: 180px;
  align-self: flex-end;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid ${SECONDART_COLOR};
  background-color: ${BACKGROUND_COLOR};
  font-size: 16px;
  color: ${TEXT_COLOR};
`;
//#endregion

//#region PROPS
interface FilterProps {
  optionsData: Array<{ id: number; title: "All" | "Complete" | "Pending" }>;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
//#endregion

//#region COMPONENT
const Filter: FC<ComponentPropsWithoutRef<"div"> & FilterProps> = ({
  onChange,
  optionsData,
}) => (
  <Wrapper>
    <Select onChange={(e) => onChange(e)}>
      {optionsData.map((option) => (
        <option value={option.title} key={option.id}>
          {option.title}
        </option>
      ))}
    </Select>
  </Wrapper>
);
//#endregion

export default Filter;
