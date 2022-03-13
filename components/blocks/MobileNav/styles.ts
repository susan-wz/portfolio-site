import styled from "styled-components";

export const MobileNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  user-select: none;
  button {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    z-index: 2;
    opacity: 0;
    padding: 0px;
    border: 0px;
  }
  span {
    opacity: 1;
    display: flex;
    width: 29px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;

export const LinksContainer = styled.ul`
  // position: absolute;
  // width: 90px;
  // height: 200px;
  // margin: -50px 0 0 -50px;
  // padding: 50px;
  // padding-top: 125px;
  transform-origin: 0% -100%;
  transform: translate(0, 0);
  transition: transform 1s cubic-bezier(0.77, 0.2, 0.05, 1);
`;

export const LinkWrapper = styled.li`
  padding: 10px 0;
  transition-delay: 2s;
`;
