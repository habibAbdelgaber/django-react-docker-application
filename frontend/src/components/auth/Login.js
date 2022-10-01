import React, { useState } from 'react'
import { authService } from '../../auth/login'

function Login() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    authService.login(username, email, password)
    // console.table([username, email, password]);
    
  }
  return (
    <div className='auth-container'>
      {/* <h3>Sign in</h3> */}
      <form className='auth-form' onSubmit={handleSubmit}>
        <input
          className='auth-form--input'
          name='username'
          type='text'
          placeholder='Your Username...'

          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='auth-form--input'
          name='email'
          type='email'
          placeholder='Your e-mail address...'

          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='auth-form--input'
          name='password'
          type='password'
          placeholder='Your Password...'

          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className='auth-form--btn'
          type='submut'
        >
          Sign in
        </button>
      </form>
      <p className='auth-container--paragraph'>If you don't already have account? <a href='#'>Sign up</a></p>
    </div>
  )
}

export default Login