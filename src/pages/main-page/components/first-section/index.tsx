import classes from "./classes.module.css"
import Carousel from "./carousel";

const FirstSection = () => {

    return (
        <>
            <div className="section" id="main-page1">
                <div className={classes.firstSection__container}>

                    <img className={classes.image} src="/logo.png" alt=""/>

                    <div>
                        <div className={classes.title}>WELCOME TO GROCERY STORE!</div>
                        <div className={classes.text}>IT&apos;S TIME TO GET PROFIT</div>
                    </div>
                    <Carousel/>

                </div>
            </div>
        </>
    )
}

export default FirstSection;
