import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarData } from './SidemenuItem';
import  './Navbar.css'


export const Navbar = () => {
    const [sideBar, setsideBar] = useState(false);

    const showSideBar = () => setsideBar(!sideBar)
    return (
        <div className='navbar-body'>
        <div className='navbar' onClick={showSideBar}>
        <MenuIcon style={{color:"white",width:"25px",height:"25px",cursor:"pointer"}} />
        </div>
        <nav className={sideBar ? 'nav-menu-active':'nav-menu'}>
                <ul>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li className={item.cName}>
                                    
                                        {item.icon}
                                        <span>{item.title}</span>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}
