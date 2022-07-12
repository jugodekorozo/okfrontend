import { ThemeProvider } from 'styled-components'
import { GlobalStyles, themes, ThemeButton, NavBar, Footer } from './components'
import { useThemeMode } from './hooks'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  AboutMePage,
  ProjectsPage,
  NotFoundPage,
  ContactMePage
} from './pages'

function App () {
  const [theme, toggleTheme] = useThemeMode()

  return (
    <ThemeProvider theme={themes[theme]}>
      <div className='App'>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about-me' element={<AboutMePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact-me' element={<ContactMePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <ThemeButton toggleTheme={toggleTheme} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
