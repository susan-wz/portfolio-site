import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: 64px;
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: 36px;
`;
