import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100vw;
  height: 100px;
  padding: 10px 40px 5px 40px;
  color: #fff;
  text-shadow: 2px 2px 2px #ccdcff;
  background-color: #141e58;
  font-size: 32px;
  box-shadow: 0px 7px 18px -1px #003399;
  z-index: 999;
  `;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;

  svg {
      width: 80px;
      height: 80px;
    }

  a {
      &:hover{
        color: #3399ff;
      }
    }
  `;

export const Container = styled.div`
padding: 15px;
`