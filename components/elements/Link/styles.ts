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
  min-width: 80px;
  @media (min-width: 768px) {
    min-width: 110px;
  }
  position: relative;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
  p {
    color: ${(props) => props.theme.colors.white};
    text-align: ${(props) => props.align};
    font-size: 20px;
    @media (min-width: 768px) {
      font-size: 28px;
    }
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
