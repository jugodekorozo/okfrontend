import styled from 'styled-components'

export const NavBarContainer = styled.div`
  height: 60px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.background2};
`
export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const TitleNav = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textColor2};
`

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70vh;
    position: absolute;
    top: 40px;
    left: ${({ click }) => (click ? 0 : '-200%')};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: ${({ theme }) => theme.colors.background2};
  }
`

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: red;
    border-bottom: 0.3rem solid black;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 60px;
  }
`

export const IconLogoMobile = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    color: ${({ theme }) => theme.colors.textColor2};
    font-size: 1rem;
  }
`

export const MenuItemText = styled.p`
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.textColor2};
`
