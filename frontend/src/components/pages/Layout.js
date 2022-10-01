import React from 'react'
import { AuthContextProvider } from '../../context/AuthContext'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

function Layout({ children }) {
   return (
      <AuthContextProvider>
         <Navigation />
         <Header />
         <div className='app-container'
            style={{
               fontFamily: 'Courier New'
            }}
         >
            {children}
         </div>
         <Footer />
      </AuthContextProvider>
   )
}

export default Layout