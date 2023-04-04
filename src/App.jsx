import './App.css'
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import Song from './Pages/Song';
import Library from './pages/Library'
import React, { useState } from 'react'
import Discover from './pages/Discover/Discover'
import Login from './pages/Login/Login';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ResponsiveDrawer />
        <Song />
      </div>
      <div>
        {loginStatus == true ? <ResponsiveDrawer /> : <Login />}
        <Library />
        {/* <Discover /> */}
      </div>
    </>
  )
}

export default App