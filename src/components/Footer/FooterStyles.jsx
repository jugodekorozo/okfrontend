import styled from 'styled-components'

export const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.background2};
`
export const FooterDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 1200px;
  height: auto;
  border: 2px solid red;
`

export const ColumnFooter = styled.div`
  border: 2px solid blue;
  width: 350px;
  height: auto;
  box-sizing: border-box;
  padding: 3px;

  @media only screen and (max-width: 950px) {
    width: 33%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
  @media only screen and (max-width: 340px) {
    width: 100%;
  }
`
export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 10px;
  line-height: 12px;
  padding: 10px 0px 5px 0px;
  color: ${({ theme }) => theme.colors.textColor2};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.25em;

  @media only screen and (max-width: 950px) {
    font-size: 14px;
  }
`
export const ColumnUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const ColumnLi = styled.li`
  color: ${({ theme }) => theme.colors.textColor2};
  font-size: 10px;
  font-family: inherit;
  font-weight: normal;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;

  &:hover {
    color: red;
    transition: 0.1s;
    -webkit-transition: 0.1s;
    -moz-transition: 0.1s;
  }

  @media only screen and (max-width: 950px) {
    font-size: 13px;
  }
`

export const Faltante = styled.nav`
  .social ul li {
    display: inline-block;
    padding-right: 5px !important;
  }

  .icons {
    height: 3em;
    width: 3em;
    color: ${({ theme }) => theme.colors.textColor2};
    &:hover {
      color: red;
      transition: 0.1s;
      -webkit-transition: 0.1s;
      -moz-transition: 0.1s;
    }
  }

  @media only screen and (max-width: 1139px) {
    .contain .social {
      width: 1000px;
      display: block;
    }
    .social h1 {
      margin: 0px;
    }
  }
`
