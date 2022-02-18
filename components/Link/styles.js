import styled, { keyframes } from "styled-components";

const leftRight = () => keyframes`
  0% {
    width: 10%;
    }
  100% {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  min-width: 110px;
  margin: 16px;
  position: relative;
  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 28px;
  }
  p:after {
    content: "";
    position: absolute;
    margin-top: 8px;
    width: 100%;
    display: block;
    height: 4px;
    background: ${(props) => props.theme.colors.secondary};
  }
  p:hover:after {
    width: 100%;
    animation: ${leftRight} 500ms ease-in-out;
  }
`;
