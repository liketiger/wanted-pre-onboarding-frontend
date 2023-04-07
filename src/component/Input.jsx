import { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef((props, ref) => <InputUI {...props} ref={ref} />);

const InputUI = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #B0B0B0;

  &:focus {
    border: 1px solid blue;
  }
`;

export default Input;
