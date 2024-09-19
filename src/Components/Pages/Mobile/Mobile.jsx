import React from 'react'
import MobileNavbar from './MobileNavbar'
import MobileLandingPage from './MobileLandingPage'

const Mobile = () => {
  return (
    <div className='display-mob '>
        <MobileNavbar/>
        <div className='pt-6 mx-auto'>
        <MobileLandingPage/>
        </div>
        
    </div>
  )
}

export default Mobile