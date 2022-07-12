/* eslint-disable multiline-ternary */
import React, { useState } from 'react'
import {
  NavBarContainer,
  NavBarWrapper,
  TitleNav,
  Menu,
  MenuItem,
  MenuItemText,
  IconLogoMobile
} from './NavBarStyles'
import ThemeButton from '../ThemeButton/ThemeButton'
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const Links = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/projects',
      title: 'Projects'
    },
    {
      path: '/about-me',
      title: 'About Me'
    },
    {
      path: '/contact-me',
      title: 'Contact Me'
    }
  ]

  const changeClick = () => {
    setClick(!click)
  }

  return (
    <>
      <NavBarContainer>
        <NavBarWrapper>
          <TitleNav>Orlando Korzo</TitleNav>
          <IconLogoMobile onClick={() => changeClick()}>
            {!click ? (
              <Icon icon='ci:hamburger' font-size='3rem' />
            ) : (
              <Icon icon='ci:close-big' font-size='3rem' />
            )}
          </IconLogoMobile>
          <Menu click={click}>
            {Links.map(({ path, title }) => (
              <MenuItem key={title} onClick={() => changeClick()}>
                <NavLink to={path}>
                  <MenuItemText>{title}</MenuItemText>
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  )
}

export default NavBar
