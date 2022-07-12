import {
  InputContainer,
  Input,
  Label,
  ErrorMessage,
  Placeholder
} from './InputFieldStyles'

function InputField () {
  return (
    <InputContainer>
      <Label>
        <Input></Input>
        <Placeholder>Placeholder</Placeholder>
        <ErrorMessage>Error</ErrorMessage>
      </Label>
    </InputContainer>
  )
}

export default InputField
