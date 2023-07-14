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
            document.documentElement.style.setProperty('--background-color', settings?.backgroundColor ? settings?.backgroundColor : "#efecec");
            document.documentElement.style.setProperty('--primaryColor-color', settings?.primaryColor ? settings?.primaryColor : "#51bcd6");
            document.documentElement.style.setProperty('--secondaryColor-color', settings?.secondaryColor ? settings?.secondaryColor : "#292929");
            document.documentElement.style.setProperty('--fontSize', settings?.fontSize ? settings?.fontSize : 15);
            document.documentElement.style.setProperty('--fontColor-color', settings?.fontColor ? settings?.fontColor : "black");
        }
    }, [settings]);


    const storedSettings = JSON.parse(localStorage.getItem('settings'));
    document.documentElement.style.setProperty('--background-color', storedSettings?.backgroundColor ? storedSettings?.backgroundColor : "#efecec");
    document.documentElement.style.setProperty('--primaryColor-color', storedSettings?.primaryColor ? storedSettings?.primaryColor : "#51bcd6");
    document.documentElement.style.setProperty('--secondaryColor-color', storedSettings?.secondaryColor ? storedSettings?.secondaryColor : "#292929");
    document.documentElement.style.setProperty('--fontSize', storedSettings?.fontSize ? storedSettings?.fontSize : 15);
    document.documentElement.style.setProperty('--fontColor-color', storedSettings?.fontColor ? storedSettings?.fontColor : "black");

    
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