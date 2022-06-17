import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { SidebarData } from './SidemenuItem';
import './Navbar.css'


export const Navbar = ({sideBarState = false}) => {
    
    const [sideBar, setsideBar] = useState(sideBarState)

    useEffect(() => {

        setsideBar(sideBarState)
      
    }, [sideBarState])
    
    return (
        <>
            
            <nav className={sideBar ? 'nav-menu-active' : 'nav-menu'}>
                <ul>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li className={item.cName}>

                                    {
                                        sideBar ? <div>
                                            { item.icon }
                                            < span > { item.title }</span>
                                        </div>:<div>
                                        {item.icon}
                                        </div>
                                       }

                </li>
                )
                        })
                    }
            </ul>
        </nav>
        </ >
    )
}
