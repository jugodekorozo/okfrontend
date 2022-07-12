import React, { useState } from 'react'
import { ButtonContainer } from './ThemeButtonStyles'

function ThemeButton ({ toggleTheme }) {
  const [isToggled, setIsToggled] = useState(false)

  const onToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }
  return (
    <ButtonContainer>
      <label>
        <input
          className='toggle-checkbox'
          type='checkbox'
          checked={isToggled}
          onChange={onToggle}
        />
        <div className='toggle-slot'>
          <div className='sun-icon-wrapper'>
            <span className='iconify sun-icon' data-icon='ci:moon' />
          </div>
          <div className='toggle-button' />
          <div className='moon-icon-wrapper'>
            <span className='iconify moon-icon' data-icon='ci:sun' />
          </div>
        </div>
      </label>
    </ButtonContainer>
  )
}

export default ThemeButton
