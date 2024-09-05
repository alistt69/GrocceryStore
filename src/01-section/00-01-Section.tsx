import classes from "./Section.module.css"
import Title from "./01-01-Title.tsx";
import Carousel from "./02-01-Carousel.tsx";
import Adv from "./05-01-Advantages.tsx";

const FirstSection = () => {

    return (
        <>
            <div className={classes.firstSection__container}>

                <div className={classes.firstSection__firstContainer}>
                    <Title/>
                    <Carousel/>
                </div>

                <div className={classes.firstSection__secondContainer}>
                    <Adv />
                </div>

            </div>
        </>
    )
}

export default FirstSection;