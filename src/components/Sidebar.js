import React, { useState } from 'react'
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai's
// import styled, { css } from 'styled-components'
// import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { SideBarNav, SidebarWrap } from './StyledComponents'

const Sidebar = ({ visible, setOpen }) => {
  const [sidebar, setSidebar] = useState(false)

  // const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <SideBarNav
        className={visible ? 'sidenav active' : 'sidenav'}
        sidebar={sidebar}
      >
        <SidebarWrap onClick={() => setOpen(false)}>
          {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </SidebarWrap>
      </SideBarNav>
    </>
  )
}

export default Sidebar
