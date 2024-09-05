import classes from "./footer-content.module.css";
import {FacebookOutlined, InstagramOutlined, MailOutlined, MobileOutlined, XOutlined} from "@ant-design/icons";

const FooterContent = () => {

    return(
        <>
            <div className={classes.footer__container}>
                <p>GROCERY STORE</p>
                <div><MobileOutlined/></div>
                <div><MailOutlined/></div>
                <div><FacebookOutlined/></div>
                <div><XOutlined/></div>
                <div><InstagramOutlined/></div>
                <h5>©2024. All rights reserved</h5>
            </div>
        </>
    )
}

export default FooterContent