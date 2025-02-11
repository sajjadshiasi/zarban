import styled from "styled-components";
import { TEXT_COLOR } from "../../style/variables";
import { ComponentPropsWithoutRef, FC } from "react";

//#region Styled Components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${TEXT_COLOR};
  outline: none;
  min-width: 300px;
  width: 100%;
  border-radius: 6px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${TEXT_COLOR};
  }
`;
//#endregion

//#region Search Component
const Search: FC<ComponentPropsWithoutRef<"input">> = (props) => (
  <Wrapper>
    <Input {...props} />
  </Wrapper>
);

export default Search;
//#endregion
