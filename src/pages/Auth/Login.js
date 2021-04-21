import { useState } from 'react'
import { icons } from '../../components/constants'
import { Button, FormStyle, PageWrap } from '../../components/StyledComponents'

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameInput = e => setUsername(e.target.value)
  const passwordInput = e => setPassword(e.target.value)

  return (
    <PageWrap>
      <FormStyle>
        <div className='formHeader'>
          <h2>Admin Login</h2>
        </div>
        <div className='formGroup'>
          <label htmlFor='username'>{icons.user} Username</label>
          <input type='text' onChange={usernameInput} value={username} />
        </div>
        <div className='formGroup'>
          <label htmlFor='password'>{icons.lock} Password</label>
          <input type='password' onChange={passwordInput} value={password} />
        </div>
        <div className='formGroup'>
          <Button noRotate>
            <span>Login</span>
            {icons.login}
          </Button>
        </div>
      </FormStyle>
    </PageWrap>
  )
}

export default Login
