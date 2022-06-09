import React from 'react'
import Contacts from './Contacts'
import Users from './Users'


const Main = () => {
  return (
    <div>
        <Users/>
        <Contacts 
        name={" Arnoldas"}
        email={" arnoldas@gmail.com"}
        age={" 18"}
        />
    </div>
  )
}

export default Main