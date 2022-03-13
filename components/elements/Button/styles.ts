import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 48px;
  border-radius: 16px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0px 16px;
  font-size: 16px;
  display: inline-flex;
  border: none;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  p {
    padding-left: 12px;
    color: ${(props) => props.theme.colors.primary};
  }
  transition: all 200ms ease-in-out;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
