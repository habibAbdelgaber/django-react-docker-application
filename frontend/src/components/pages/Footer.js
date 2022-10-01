import React from 'react'

function Footer() {
  return (
    <footer className='copyright'>
      <p className='copyright--text'>
        All rights Reserved {new Date().getFullYear()} &#128077;
      </p>
    </footer>
  )
}

export default Footer