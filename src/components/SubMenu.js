import React, { useState } from 'react'
import { SidebarLabel, SidebarLink, DropDownLink } from './StyledComponents'

const SubMenu = ({ item }) => {
  // console.log('TITLE:', item.title, 'SUB NAVS:', item.subNav)

  const [subnav, setSubnav] = useState(false)

  const showSubNav = () => setSubnav(!subnav)

  return (
    <>
      <SidebarLink
        to={item.subNav ? '#' : item.path}
        onClick={item.subNav && showSubNav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconClosed
            : item.subNav
            ? item.iconOpen
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => (
          <DropDownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropDownLink>
        ))}
    </>
  )
}

export default SubMenu
