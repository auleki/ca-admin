import './App.scss'
import { useState } from 'react'
import PageRoutes from './components/PageRoutes'
import { RiMenu2Fill, RiCloseCircleLine } from 'react-icons/ri'
// import Sidebar from './components/Sidebar'
// import { AppWrap } from './components/StyledComponents'
import Login from './pages/Auth/Login'
import SideNav from './components/SideNav'

function App () {
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)

  const expandMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    if (open) {
      setOpen(false)
    }
  }

  return (
    // <AppWrap onClick={closeMenu}>
    <div className='App' onClick={closeMenu}>
      <header>
        {open ? (
          <RiCloseCircleLine onClick={expandMenu} />
        ) : (
          <RiMenu2Fill onClick={expandMenu} />
        )}
      </header>
      <SideNav visible={open} setOpen={setOpen} />
      {/* <Sidebar visible={open} setOpen={setOpen} /> */}
      {/* ENSURING AUTHENTICATION */}
      <PageRoutes />
      {/* {user ? <PageRoutes /> : <Login setUser={setUser} />} */}
    </div>
    // </AppWrap>
  )
}

export default App
