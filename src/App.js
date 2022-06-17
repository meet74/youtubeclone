import React, { useState } from 'react'
import './App.css';
import { Menu, SearchSharp, Mic, VideoCallOutlined, WidgetsOutlined, NotificationsNoneOutlined, YouTube } from '@mui/icons-material';
import youtubeLogo from './assets/images/youtube_logo.png'
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [sideBarState, setsideBarState] = useState(false);

  const showSideBar = () => {

    setsideBarState(!sideBarState)}
  return (
    <div className="App">

      <div style={{ display: "flex", position: 'relative', width: '100%' }}>

        <Menu onClick={()=>{
          showSideBar()
        }} style={{ color: "white", width: "25px", height: "25px", cursor: "pointer",margin:"30px" }} />

        <div style={{ flexGrow: 2, flexShrink: 1 }}>
          <header className="App-header">
            <section className="left-header">

              <img
                src={youtubeLogo}
                className="youtube-logo"
                alt="YouTube Logo"
              />

              <h3>YouTube</h3>

            </section>
            <section className="middle-header">
              <div className="search-input">
                <div style={{ margin: "10px" }}>
                  <SearchSharp style={{ color: "white" }} className="search-icon" />
                </div>
                <input className="input-bar" />
                <div style={{ margin: "10px" }}>
                  <Mic style={{ color: "white" }} className="mic-icon" />
                </div>
              </div>

            </section>
            <section className="right-header">
              <VideoCallOutlined style={{ color: "white", width: "25px", height: "25px" }} className="create-icon" />
              <WidgetsOutlined style={{ color: "white", width: "25px", height: "25px" }} className="menu-icon" />
              <NotificationsNoneOutlined style={{ color: "white", width: "25px", height: "25px" }} className="notification-icon" />
              <img
                src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=100"
                className="profile-picture"
                alt="profile"
              />
            </section>
          </header>
         
        </div>
      </div>
      <div style={{display:"flex"}}>
        <div>
        <Navbar sideBarState={sideBarState}/>
        </div>
      <main className='main-body'>
            <h1>Shreehari</h1>
          </main>
      </div>
    </div>
  );
}

export default App;
