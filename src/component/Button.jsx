import styled from "styled-components";

const Button = props => <ButtonUI {...props}>{props.children}</ButtonUI>;

const ButtonUI = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 3px 3px 10px #B0B0B0;
`

export default Button;
