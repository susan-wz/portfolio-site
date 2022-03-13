import styled from "styled-components";

export const TextContainer = styled.p`
  color: ${(props) => props.theme.colors[props.color]};
  line-height: 1.4;
  font-size: 20px;
  margin-bottom: 12px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
