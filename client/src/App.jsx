import './App.css'
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import Song from './Pages/Song/Song';
import Library from './pages/Library'
import React, { useState } from 'react'
import Discover from './pages/Discover/Discover'
import Login from './pages/Login/Login';


function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      <div style={{ display: 'flex', width: '100vw' }}>
        <ResponsiveDrawer />
        <div>
          <Library />
        </div>
        {/* <Song /> */}
      </div>
      {/* <div>
        {loginStatus == true ? <ResponsiveDrawer /> : <Login />}
        <Discover />
      </div> */}
    </>
  )
}

export default App