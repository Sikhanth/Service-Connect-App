import React from 'react'
import Header from '../../components/Header'
import NotificationList from '../../components/client/NotificationList'

const NotificationPage = () => {
  return (
    <div>
      <Header type='simple' title='NOTIFICATIONS' />
      <NotificationList />
    </div>
  )
}

export default NotificationPage
