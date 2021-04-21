import './App.scss'
import { useState } from 'react'
import PageRoutes from './components/PageRoutes'
import Sidebar from './components/Sidebar'
import { AppWrap } from './components/StyledComponents'
import Login from './pages/Auth/Login'

function App () {
  const [user, setUser] = useState(null)
  return (
    <AppWrap>
      <Sidebar />
      {user ? <PageRoutes /> : <Login setUser={setUser} />}
    </AppWrap>
  )
}

export default App
