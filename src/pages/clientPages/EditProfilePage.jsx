import React from 'react'
import Header from '../../components/Header'
import EditProfile from '../../components/client/EditProfile'

const EditProfilePage = () => {
  return (
    <div>
      <Header type='simple' title='EDIT PROFILE'/> 
      <EditProfile/>
    </div>
  )
}

export default EditProfilePage;
