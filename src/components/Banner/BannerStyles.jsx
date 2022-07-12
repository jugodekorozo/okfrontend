import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
  top: 80;
`
export const SlideContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const Slide = styled.div`
  position: relative;
  height: auto;
  min-width: 100%;
  vertical-align: middle;
  border: 0;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 500px;

  img {
    width: 100%;
    vertical-align: top;
  }
`

export const BannerText = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
    background-color: black;
  }
`

export const Controls = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const Button = styled.button`
  position: absolute;
  height: 100%;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.3s ease all;

  ${props => (props.right ? 'right:0' : 'left:0')}
`
