import styled from "styled-components";

export const PageContainer = styled.div`
  background: ${(props) => props.theme.colors[props.backgroundColor]};
  height: 100vh;
  width: 100%;
  padding: 24px 48px;
  @media (min-width: 768px) {
    padding: 48px 96px;
  }
`;
