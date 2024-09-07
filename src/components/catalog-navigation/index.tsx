import classes from "./classes.module.css";
import Index from "../text-card";
import { SunOutlined, RestOutlined, HomeOutlined } from "@ant-design/icons";
import {useState} from "react";


const CatalogNavigation = () => {

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonNumber: number) => {
        setActiveButton(buttonNumber);
    };

    return(
        <>


            <ul className={classes.catalogNavigation__container}>

                <li className={classes.Catalog}>
                    <a href="#2" onClick={() => handleButtonClick(0)}>
                        <div className={classes.catalogNavigation__titleCard} style={{
                            backgroundColor: activeButton === 0 ? 'rgba(255,255,255,0.69)' : 'rgba(0, 0, 0, 0.3)',
                            color: activeButton === 0 ? 'rgba(0,0,0,0.5)' : '#d2d2d2',
                        }}>

                            CATALOG

                        </div>
                    </a>
                </li>


                <li>
                    <a href="#2/1" onClick={() => handleButtonClick(1)}>
                        <div className={classes.catalogNavigation__defaultCard} style={{
                            backgroundColor: activeButton === 1 ? 'rgba(255,255,255,0.69)' : 'rgba(0, 0, 0, 0.3)',
                            color: activeButton === 1 ? 'rgba(0,0,0,0.5)' : '#d2d2d2',
                        }}>

                            <div className={classes.defaultCard__iconContainer}><SunOutlined /></div>
                            <div className={classes.defaultCard__textContainer}>
                                <Index iconHeader="FARM PRODUCTS"
                                       iconDescription="Straight from our sunny farms!"/>
                            </div>

                        </div>
                    </a>
                </li>


                <li>
                    <a href="#2/2" onClick={() => handleButtonClick(2)}>
                        <div className={classes.catalogNavigation__defaultCard} style={{
                            backgroundColor: activeButton === 2 ? 'rgba(255,255,255,0.69)' : 'rgba(0, 0, 0, 0.3)',
                            color: activeButton === 2 ? 'rgba(0,0,0,0.5)' : '#d2d2d2',
                        }}>

                            <div className={classes.defaultCard__iconContainer}><RestOutlined /></div>
                            <div className={classes.defaultCard__textContainer}>
                                <Index iconHeader="DRINKS"
                                       iconDescription="Juices, compotes, lemonades etc."/>
                            </div>

                        </div>
                    </a>
                </li>


                <li>
                    <a href="#2/3" onClick={() => handleButtonClick(3)}>
                        <div className={classes.catalogNavigation__defaultCard} style={{
                            backgroundColor: activeButton === 3 ? 'rgba(255,255,255,0.69)' : 'rgba(0, 0, 0, 0.3)',
                            color: activeButton === 3 ? 'rgba(0,0,0,0.5)' : '#d2d2d2',
                        }}>

                            <div className={classes.defaultCard__iconContainer}><HomeOutlined /></div>
                            <div className={classes.defaultCard__textContainer}>
                                <Index iconHeader="FOR HOME"
                                       iconDescription="Household cleaning products "/>
                            </div>

                        </div>
                    </a>
                </li>

            </ul>
        </>
    )
}


export default CatalogNavigation;
