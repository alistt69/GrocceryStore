import classes from "./classes.module.css";
import {useState} from "react";

const AboutPageMenu = () => {

    const [activeTab, setActiveTab] = useState(classes.headerMenu__firstItem)

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
    }

    return(
        <>
            <div className={classes.menu__container}>
                <nav className={classes.menu__navigation}>

                    <a href={"#1"} onClick={() => handleTabChange(classes.menu__firstItem)}>About</a>
                    <a href={"#2"} onClick={() => handleTabChange(classes.menu__secondItem)}>Our team</a>
                    <a href={"#3"} onClick={() => handleTabChange(classes.menu__thirdItem)}>Promocodes</a>
                    <a href={"#4"} onClick={() => handleTabChange(classes.menu__fourthItem)}>Contact</a>

                    <div className={`${classes.animation} ${activeTab}`}></div>

                </nav>
            </div>
        </>
    )
}

export default AboutPageMenu;
