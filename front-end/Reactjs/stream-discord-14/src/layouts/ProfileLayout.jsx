import React from 'react'
import Header from '../components/Header'

const ProfileLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default ProfileLayout
