import './App.scss'
import PageRoutes from './components/PageRoutes'
import Sidebar from './components/Sidebar'
import { AppWrap } from './components/StyledComponents'

function App () {
  return (
    <AppWrap>
      <Sidebar />
      <PageRoutes />
    </AppWrap>
  )
}

export default App
