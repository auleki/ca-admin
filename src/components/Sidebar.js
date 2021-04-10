import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { Nav, NavIcon, SideBarNav, SidebarWrap } from './StyledComponents'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Nav>
        <NavIcon to='#' onClick={showSidebar}>
          <FaIcons.FaArrowCircleRight />
        </NavIcon>
      </Nav>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <FaIcons.FaWindowClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </SidebarWrap>
      </SideBarNav>
    </>
  )
}

export default Sidebar
