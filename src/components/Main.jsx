import React, { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../style/main.scss";
import { useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";



export default function Main({settings}){
    const location = useLocation();
    const [showSideBar, setShowSidebar] = useState(true);

    useEffect(() => {
        if (Object.keys(settings).length !== 0) {
            document.documentElement.style.setProperty('--background-color', settings.backgroundColor);
            document.documentElement.style.setProperty('--primaryColor-color', settings.primaryColor);
            document.documentElement.style.setProperty('--secondaryColor-color', settings.secondaryColor);
            document.documentElement.style.setProperty('--fontSize', settings.fontSize);
            document.documentElement.style.setProperty('--fontColor-color', settings.fontColor);
        }
    }, [settings]);


    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    document.documentElement.style.setProperty('--background-color', storedSettings.backgroundColor);
    document.documentElement.style.setProperty('--primaryColor-color', storedSettings.primaryColor);
    document.documentElement.style.setProperty('--secondaryColor-color', storedSettings.secondaryColor);
    document.documentElement.style.setProperty('--fontSize', storedSettings.fontSize);
    document.documentElement.style.setProperty('--fontColor-color', storedSettings.fontColor);

  
console.log("render", showSideBar)
  
    return (
        <div className='main'>

            <div className="middle">
                <div className={showSideBar ? `sidenav` : `sidenav-mobile`}>
                    <SideMenu showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
                </div>
                <div className="content">
                    <div className="header">
                        <Header showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
                    </div>

                    <div className="outlet">
                        {location?.pathname === "/" ?
                            <HomePage />
                            :
                            <Outlet />
                        }
                    </div>


                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </div>

        </div>
    )
}