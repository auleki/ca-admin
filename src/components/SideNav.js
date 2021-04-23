import { RiMenu2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SideNavStyle } from './StyledComponents'
import { useState } from 'react'
import { icons } from '../components/constants'

const SideNav = ({ visible, setOpen }) => {
  return (
    <SideNavStyle
      className={visible ? 'sidenav active' : 'sidenav'}
      active={visible}
    >
      <ul className='navigation'>
        <Link to='/'>
          <li>
            {icons.overview}
            <span>Overview</span>
          </li>
        </Link>
        <Link to='/clothing/clothes'>
          <li>
            {icons.clothes}
            <span>Clothes</span>
          </li>
        </Link>
        <Link to='/clothing/orders'>
          <li>
            {icons.orders}
            <span>Orders</span>
          </li>
        </Link>
        <Link to='/users/subscribers'>
          <li>
            {icons.subscribers}
            <span>Subscribers</span>
          </li>
        </Link>
        <Link to='/quiz/winners'>
          <li>
            {icons.winners}
            <span>Quiz Winners</span>
          </li>
        </Link>
      </ul>
    </SideNavStyle>
  )
}

export default SideNav
