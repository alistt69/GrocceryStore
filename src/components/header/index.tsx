import classes from "./classes.module.css";
import {useNavigate} from "react-router-dom";
import React from 'react';

import MainMenu from "./main-menu";
import AboutPageMenu from "./about-page-menu";

interface CurrentPage {
    page: string;
}



const Header: React.FC<CurrentPage> = ({ page}) => {


    const navigate = useNavigate();

    const handleClick = (address: string) => {
        navigate(address);
    };

    return(
        <>
            <header className={classes.header__container}>
                <div className={classes.header__logoContainer} onClick={() => handleClick('/')}>
                    <div className={classes.header__logoImageContainer}>
                        <img className={classes.header__logoImage} src='/logo.png'
                             alt="logo"/>
                    </div>
                    <div className={classes.header__logoTextContainer}>
                        <p>GROCERY</p>
                        <p>STORE</p>
                    </div>
                </div>
                {page === 'main' ?
                    <MainMenu /> :
                    <AboutPageMenu />
                }

            </header>
        </>
    )
}

export default Header