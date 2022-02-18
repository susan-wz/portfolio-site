import styled from "styled-components";

export const LinkContainer = styled.div`
  width: 100%;
  p { 
    color: ${props => props.theme.colors.white};
    font-size: 28px;
  }
  p:after {    
    background: none repeat scroll 0 0 transparent;
    // bottom: 0;
    content: "";
    display: block;
    height: 4px;
    // left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    // width: 0;
  }
  p:hover:after { 
    width: 100%; 
    left: 0; 
  }
`;
