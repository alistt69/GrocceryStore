import classes from "./classes.module.css"
import Title from "./title";
import Carousel from "./carousel";
import InfoCards from "./info-cards";

const FirstSection = () => {

    return (
        <>
            <div className={classes.firstSection__container}>

                <div className={classes.firstSection__firstContainer}>
                    <Title/>
                    <Carousel/>
                </div>

                <div className={classes.firstSection__secondContainer}>
                    <InfoCards />
                </div>

            </div>
        </>
    )
}

export default FirstSection;