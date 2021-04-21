import { useState } from 'react'
import { icons } from '../../components/constants'
import {
  Button,
  FormStyle,
  PageWrap,
  ErrorStyle
} from '../../components/StyledComponents'

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
  const [error, setError] = useState('')

  const usernameInput = e => setUsername(e.target.value)
  const passwordInput = e => setPassword(e.target.value)

  /*

  - post user details via form 
  - verify user details on backend 
    if valid create and respond with token
    else respond with access denied 
  - token is stored on client side and sent via header with every request
  - place expiry on jwt tokens
  
  */

  const loginAdmin = async e => {
    e.preventDefault()

    if (username && password.length > 5) {
      const user = { username, password }
      setUser(user)
      // console.table(user)
      alert('You have successfully logged in')
    }
    setError('Both fields need to be filled')
  }

  return (
    <PageWrap>
      <FormStyle onSubmit={loginAdmin}>
        <div className='formHeader'>
          <h2>Admin Login</h2>
        </div>
        <div className='formGroup'>
          <label htmlFor='username'>{icons.user} Username</label>
          <input
            autoFocus
            type='text'
            onChange={usernameInput}
            value={username}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>{icons.lockColored} Password</label>
          <input
            type='password'
            onChange={passwordInput}
            value={password}
            required
          />
        </div>
        {error && <ErrorComp error={error} setError={setError} />}
        <div className='formGroup'>
          <Button noRotate onClick={loginAdmin}>
            <span>Login</span>
            {icons.login}
          </Button>
        </div>
      </FormStyle>
    </PageWrap>
  )
}

export default Login
