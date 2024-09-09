import classes from "./classes.module.css";
import {FacebookOutlined, InstagramOutlined, MailOutlined, MobileOutlined, XOutlined} from "@ant-design/icons";
import React from "react";

const Footer: React.FC<{page: string}> = ({ page }) => {

    return(
        <>

            <div className="section fp-auto-height" id={page}>
                <div className={classes.footer__container}>

                    <p>GROCERY STORE</p>
                    <div><a href="tel:+7-(XXX)-55X-5X-5X"><MobileOutlined/></a></div>
                    <div><a href="mailto:groccery@gmail.com"><MailOutlined/></a></div>
                    <div><a><FacebookOutlined/></a></div>
                    <div><a><XOutlined/></a></div>
                    <div><a><InstagramOutlined/></a></div>
                    <h5>©2024. All rights reserved</h5>

                </div>
            </div>


        </>
    )
}

export default Footer;
