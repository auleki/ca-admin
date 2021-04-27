import { useState } from 'react'
import { icons } from '../../components/constants'
import {
  Button,
  FormStyle,
  PageWrap,
  ErrorStyle
} from '../../components/StyledComponents'
import axios from 'axios'
// import Wp1 from '../../assets/bg-1.jpg'
// src/assets/bg-1.jpg
const ErrorComp = ({ error, setError }) => {
  return (
    <ErrorStyle>
      <span className='errorMsg'>{error}</span>
      <span className='icon' onClick={() => setError('')}>
        {icons.close}
      </span>
    </ErrorStyle>
  )
}

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const usernameInput = e => setUsername(e.target.value)
  const passwordInput = e => setPassword(e.target.value)
  const Wp1 =
    'https://res.cloudinary.com/dyj6pqx6d/image/upload/v1619087696/bg-1_okil1k.jpg'

  /*
  - post user details via form 
  - verify user details on backend 
    if valid create and respond with token
    else respond with access denied 
  - token is stored on client side and sent via header with every request
  - place expiry on jwt tokens
  */
  async function saveTokenToStorage (token) {
    if (!localStorage.getItem('token')) {
      let stringifiedToken = JSON.stringify(token)
      localStorage.setItem('token', stringifiedToken)
    }
    localStorage.removeItem('token')
  }

  const loginAdmin = async e => {
    e.preventDefault()
    setLoading(true)
    if (username && password.length > 5 && password === 'breach') {
      const userInfo = { username, password }
      const url =
        'https://afternoon-chamber-08446.herokuapp.com/api/admin/login'
      const localUrl = 'http://localhost:6500/api/admin/login'
      const { data } = await axios.post(url, userInfo)
      await saveTokenToStorage(data)
      console.table(data)
      setUser(data.username)
      setLoading(false)
    }

    if (!username || !password) {
      setLoading(false)
      setError('Both fields need to be filled')
    }

    if (password !== 'breach') {
      setLoading(false)
      setError('username or password is incorrect')
    }
  }

  return (
    <PageWrap>
      <FormStyle onSubmit={loginAdmin}>
        <div className='formHeader'>
          <h2>Admin Login</h2>
        </div>
        <div className='formGroup'>
          <label htmlFor='username'>
            {icons.user} <span>Username</span>
          </label>
          <input
            autoFocus
            type='text'
            onChange={usernameInput}
            value={username}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>
            {icons.lockColored} <span>Password</span>
          </label>
          <input
            type='password'
            onChange={passwordInput}
            value={password}
            required
          />
        </div>
        {error && <ErrorComp error={error} setError={setError} />}
        <div className='formGroup'>
          <Button noRotate onClick={loginAdmin} loading={loading}>
            {loading ? (
              <span className='button_icon'>{icons.loading}</span>
            ) : (
              <div className='flex'>
                <span>Login</span>
                <span className='button_icon'>{icons.login}</span>
              </div>
            )}
          </Button>
        </div>
      </FormStyle>
    </PageWrap>
  )
}

export default Login
function adminLogin (
  setLoading,
  username,
  password,
  saveTokenToStorage,
  setUser,
  setError
) {
  return async e => {
    e.preventDefault()
    setLoading(true)
    if (username && password.length > 5 && password === 'breach') {
      const userInfo = { username, password }
      const url =
        'https://afternoon-chamber-08446.herokuapp.com/api/admin/login'
      const localUrl = 'http://localhost:6500/api/admin/login'
      const { data } = await axios.post(url, userInfo)
      await saveTokenToStorage(data)
      console.table(data)
      setLoading(false)
      setUser(data.username)
    }

    if (!username || !password) {
      setLoading(false)
      setError('Both fields need to be filled')
    }

    if (password !== 'breach') {
      setLoading(false)
      setError('username or password is incorrect')
    }
  }
}
