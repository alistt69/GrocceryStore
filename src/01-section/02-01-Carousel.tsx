import classes from "./Section.module.css"
import { Carousel as Car} from 'antd';


const Carousel = () => {

    return (
        <>
            <div className={classes.firstSection__carouselContainer}>

                <Car autoplay>

                    <div>
                        <img src='/src/01-section/01-images/image1.jpg' className={classes.firstSection__carouselImg} alt="banner 1"/>
                    </div>

                    <div>
                        <img src='/src/01-section/01-images/image2.jpg' className={classes.firstSection__carouselImg} alt="banner 2"/>
                    </div>

                    <div>
                        <img src='/src/01-section/01-images/image3.jpg' className={classes.firstSection__carouselImg} alt="banner 3"/>
                    </div>

                    <div>
                        <img src='/src/01-section/01-images/image4.jpg' className={classes.firstSection__carouselImg} alt="banner 4"/>
                    </div>

                </Car>

            </div>
        </>
    )
}

export default Carousel;