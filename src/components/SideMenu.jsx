import React from 'react';
import { NavLink } from 'react-router-dom';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ArticleIcon from '@mui/icons-material/Article';
import WebIcon from '@mui/icons-material/Web';
import TaskIcon from '@mui/icons-material/Task';
import "../style/sidenav.scss"
import CloseIcon from '@mui/icons-material/Close';


const SideMenu = ({setShowSidebar}) => {

  return (
    <>
      <div className="sidebar">
        <div>
        <CloseIcon onClick={()=>{setShowSidebar(true)}} className='menu-icon' />
        </div>
        <NavLink to="/">
          <div className='sidenav-head'>
            <ColorLensIcon fontSize='small' className='sidebarContent_icon' />
            Theme Switcher
          </div>
        </NavLink>
        <hr className='hr-line' />
        <aside className="sidenav-main" id="sidenav-main">
          <div>
            <ul className="navbar">
              <li className="nav-item">
                <NavLink to="/page1">
                  
                    <div className="sidebar_content">
                      <ArticleIcon fontSize='small' className='sidebarContent_icon' />
                      <span className="sidebarContent_title">Page1</span></div>
                  
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/page2">
                  
                    <div className="sidebar_content">
                      <WebIcon fontSize='small' className='sidebarContent_icon' />
                      <span className="sidebarContent_title">Page2</span></div>
                  
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/page3">
                  
                    <div className="sidebar_content">
                      <TaskIcon fontSize='small' className='sidebarContent_icon' />
                      <span className="sidebarContent_title">Page3</span></div>
                  
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/settings">
                  
                    <div className="sidebar_content">
                      <SettingsApplicationsIcon fontSize='small' className='sidebarContent_icon' />
                      <span className="sidebarContent_title">Setting</span></div>
                  
                </NavLink>
              </li>

            </ul>
          </div>
        </aside>
      </div>
    </>
  )
};

export default SideMenu;
