import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MobileNavContainer = styled.div``;

export const MenuToggle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  user-select: none;
  button {
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 32px;
    background: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    z-index: 2;
    padding: 0px;
    border: 0px;
  }
  p {
    opacity: 1;
    display: flex;
    width: 40px;
    height: 2px;
    margin-bottom: 8px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;

export const LinksContainer = styled.ul`
  position: absolute;
  transform-origin: 0% -100%;
  transform: translate(0, 0);
  transition: transform 1s cubic-bezier(0.77, 0.2, 0.05, 1);
  width: 148px;
  right: 48px;
`;

export const LinkWrapper = styled.li`
  padding: 10px 0;
  transition-delay: 2s;
`;
