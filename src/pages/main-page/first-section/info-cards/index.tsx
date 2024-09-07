import classes from "./classes.module.css";
import {CommentOutlined, LockOutlined, MonitorOutlined, SafetyOutlined, TruckOutlined} from "@ant-design/icons";
import Index from "../../../../components/text-card";

const InfoCards = () => {

    return(
        <>
            <div>

                <div className={classes.firstSection__advantagesCardContainer}>

                    <div className={classes.advantagesCard__iconContainer}><TruckOutlined/></div>
                    <div className={classes.advantagesCard__textContainer}>
                        <Index iconHeader="FREE SHIPPING & RETURN"
                               iconDescription="Free shipping on orders over $20"/>
                    </div>

                </div>


                <div className={classes.firstSection__advantagesCardContainer}>

                    <div className={classes.advantagesCard__iconContainer}><SafetyOutlined/></div>
                    <div className={classes.advantagesCard__textContainer}>
                        <Index iconHeader="MONEY BACK GUARANTEE"
                               iconDescription="100% money back guarantee"/>
                    </div>

                </div>


                <div className={classes.firstSection__advantagesCardContainer}>

                    <div className={classes.advantagesCard__iconContainer}><CommentOutlined/></div>
                    <div className={classes.advantagesCard__textContainer}>
                        <Index iconHeader="ONLINE SUPPORT 24/7"
                               iconDescription="Always ready to help you"/>
                    </div>

                </div>


                <div className={classes.firstSection__advantagesCardContainer}>

                    <div className={classes.advantagesCard__iconContainer}><LockOutlined/></div>
                    <div className={classes.advantagesCard__textContainer}>
                        <Index iconHeader="ABSOLUTE SAFETY"
                               iconDescription="Your personal data is securely protected"/>
                    </div>

                </div>


                <div className={classes.firstSection__advantagesCardContainer}>

                    <div className={classes.advantagesCard__iconContainer}><MonitorOutlined/></div>
                    <div className={classes.advantagesCard__textContainer}>
                        <Index iconHeader="WIDE SELECTION"
                               iconDescription="Any goods for every taste"/>
                    </div>

                </div>

            </div>


        </>
    )
}

export default InfoCards;