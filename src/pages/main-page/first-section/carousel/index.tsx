import classes from "./classes.module.css"
import { Carousel as Car} from 'antd';


const Carousel = () => {

    return (
        <>
            <div className={classes.firstSection__carouselContainer}>

                <Car autoplay>

                    <div>
                        <img src='/src/images/carousel/image1.jpg' className={classes.firstSection__carouselImg} alt="banner 1"/>
                    </div>

                    <div>
                        <img src='/src/images/carousel/image2.jpg' className={classes.firstSection__carouselImg} alt="banner 2"/>
                    </div>

                    <div>
                        <img src='/src/images/carousel/image3.jpg' className={classes.firstSection__carouselImg} alt="banner 3"/>
                    </div>

                    <div>
                        <img src='/src/images/carousel/image4.jpg' className={classes.firstSection__carouselImg} alt="banner 4"/>
                    </div>

                </Car>

            </div>
        </>
    )
}

export default Carousel;