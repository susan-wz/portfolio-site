import styled from "styled-components";

export const PanelContainer = styled.div`
  background: ${(props) => props.theme.colors[props.backgroundColor]};
  height: 100vh;
  width: 100vw;
`;
