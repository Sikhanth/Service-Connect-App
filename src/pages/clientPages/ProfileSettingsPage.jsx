import React from 'react'
import Header from '../../components/Header'
import ToolBar from '../../components/ToolBar'
import ProfileSettings from '../../components/client/ProfileSettings'


const ProfileSettingsPage = () => {
  return (
    <div>
      <Header
        type="simple"
        title="PROFILE"
      />
      <ProfileSettings/>
      <ToolBar/>
    </div>
  )
}

export default ProfileSettingsPage
