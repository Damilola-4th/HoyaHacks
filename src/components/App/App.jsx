// import { useState } from 'react'
import './App.css'
import { UserContext } from '../../context/UserContext'
import{ useState } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import MenuTab from "../MenuTab/MenuTab"
import NavImage from '../NavImage/NavImage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  // const [count, setCount] = useState(0)

  // Initializing the user state with an object
  const [user, setUser] = useState({ 
    "email": null, 
    "password":null,
    "confirmPassword": null,

  });

  const [loginInfo, setLoginInfo] = useState( {
    "email":null,
    "Password": null
  });
  
  const [userWorkFlow,setUserWorkFlow] = useState( [{id: 1, questions:[]}])
  const [currentWorkFlow, setCurrentWorkFlow] = useState( 0 )

  return (
    <div className='App-div'>

      <UserContext.Provider value= {{ user, setUser, loginInfo, setLoginInfo, userWorkFlow, setUserWorkFlow, currentWorkFlow, setCurrentWorkFlow}}>
      <BrowserRouter>
    
      <MenuTab className= "LandingPage-Menu"/>

      <Routes>
        <Route path="/" element= {<LandingPage />} />

      </Routes>
      
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App
