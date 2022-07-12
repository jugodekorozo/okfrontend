import { useState } from 'react'

const useThemeMode = () => {
  const [theme, setTheme] = useState('light')

  const toggledTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return [theme, toggledTheme]
}

export default useThemeMode
