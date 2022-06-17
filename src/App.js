import React, { useState, useEffect } from 'react'
import './App.css';
import { Menu, SearchSharp, Mic, VideoCallOutlined, WidgetsOutlined, NotificationsNoneOutlined, YouTube } from '@mui/icons-material';
import youtubeLogo from './assets/images/youtube_logo.png'
import { Navbar } from './components/Navbar/Navbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function App() {
  const [sideBarState, setsideBarState] = useState(false);
  const [images, setimages] = useState([])

  useEffect(() => {
    
    fetch('https://picsum.photos/v2/list',{
      method:"GET"
    }).then(async res => {
      const apiImages = await res.json();
      setimages(apiImages);
    })
  }, [])
  
  const showSideBar = () => {

    setsideBarState(!sideBarState)}
  return (
    <div className="App">
          <header className="App-header">
          
            <section className="left-header">
            <Menu onClick={()=>{
          showSideBar()
        }} className='hamburger-menu' />
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

      <div style={{display:"flex", backgroundColor:"#222222",flex:1}}>
        <div>
        <Navbar sideBarState={sideBarState}/>
        </div>
      <main className='main-body'>
            <div className='grid-container'>
              {
                images.map((item,index) => {
                  return(
                   <div className='grid-item'>
                      <picture>
                      <img src={item.download_url} style={{height:"175px",width:"300px"}}/>
                      <div className='length-text'>
                      <p >1:45</p>
                      </div>
                      </picture>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                      <img src={item.download_url} style={{height:"30px",width:"30px",borderRadius:"50px"}}/>
                      <p style={{fontFamily:"Roboto", fontSize:"1rem",textAlign:"start", margin:"5px 5px 5px 15px"}}>Use the Most popular Crosshair in Valorant</p>
                      <MoreVertIcon style={{ color: "white", width: "25px", height: "25px" }}  />
                      </div>
                   </div>
                  )
                })
              }
            </div>
          </main>
      </div>
    </div>
  );
}

export default App;
