import styled from "styled-components";

export const TextContainer = styled.p`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
