import React from 'react'

function Signup() {
    return (
        <div className='auth-container'>
            {/* <h3>Sign in</h3> */}
            <form className='auth-form'>
                <input className='auth-form--input' type='text' required placeholder='Your Username...'/>
                <input className='auth-form--input' type='email' required placeholder='Your e-mail address...'/>
                <input className='auth-form--input' type='password' required placeholder='Your Password...'/>
                <input className='auth-form--input' type='password' required placeholder='Confirm Password...'/>
                <button className='auth-form--btn' type='submut'>Sign up</button>
            </form>
            <p className='auth-container--paragraph'>If you already have account? <a href='#'>Sign in</a></p>
        </div>
      )
}

export default Signup