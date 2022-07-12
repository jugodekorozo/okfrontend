import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  margin: 50px;
`
export const Label = styled.label`
  position: relative;
  font-size: 15px;
`

export const Input = styled.input`
  padding: 0.5rem;
  width: 17rem;
  border: none;
  border-radius: 4px;
  font: inherit;
  background-color: #faf7f2;
  &:focus-visible {
    border: none;
  }
  &:focus + span {
    top: -25px;
    font-size: 16px;
    color: #222;
  }
  &:focus {
    border: none;
  }
`

export const Placeholder = styled.span`
  color: #d4d1cd;
  position: absolute;
  left: 5%;
  top: 18%;
  font-size: 12px;
  transition: font-size 0.3s ease-in, font color 0.3s ease-in, top 0.3s ease-in;
`
export const ErrorMessage = styled.span`
  width: 17rem;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  color: red;
  height: 24px;
`
