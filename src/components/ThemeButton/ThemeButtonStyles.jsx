import styled from 'styled-components'

export const ButtonContainer = styled.nav`
  .toggle-checkbox {
    position: relative;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-slot {
    position: relative;
    height: 1.25em;
    width: 2.5em;
    border: 5px solid #e4e7ec;
    border-radius: 1.25em;
    background-color: white;
    box-shadow: 0px 10px 25px #e4e7ec;
    transition: background-color 350ms;
  }

  .toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
  }

  .toggle-button {
    transform: translate(1.46875em, 0.21875em);
    position: absolute;
    height: 0.8125em;
    width: 0.8125em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.1625em #ffbb52;
    transition: background-color 350ms, border-color 350ms,
      transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.375em white;
    transform: translate(0.21875em, 0.21875em);
  }

  .sun-icon {
    position: absolute;
    height: 0.75em;
    width: 0.75em;
    color: #ffbb52;
  }

  .sun-icon-wrapper {
    position: absolute;
    height: 0.75em;
    width: 0.75em;
    opacity: 1;
    transform: translate(0.25em, 0.25em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 250ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(0.375em, 0.25em) rotate(0deg);
  }

  .moon-icon {
    position: absolute;
    height: 0.75em;
    width: 0.75em;
    color: black;
  }

  .moon-icon-wrapper {
    position: absolute;
    height: 0.75em;
    width: 0.75em;
    opacity: 0;
    transform: translate(2.75em, 0.5em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms,
      transform 500ms cubic-bezier(0.26, 2.5, 0.46, 0.71);
  }

  .toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(1.5em, 0.25em) rotate(-15deg);
  }
`
