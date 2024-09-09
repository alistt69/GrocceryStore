import classes from "./classes.module.css";
import React, {useState} from "react";
import CartButton from "../cart-button";
import CatalogProducts from "./catalog-products";


const MainProducts: React.FC<{

    products: any,
    handleAmountChange: (key: string, productName: string, operation: number, productPrice: number) => void,
    totalAmount: number,
    showModal: () => void

}> = ({ products, handleAmountChange, totalAmount, showModal }) => {

    const [activeSlide, setActiveSlide] = useState<string>('MOST-POPULAR');

    const [activeTab, setActiveTab] = useState(classes.menu__firstItem)

    const handleTabChange = (newTab: string, newSlide: string) => {
        setActiveTab(newTab);
        setActiveSlide(newSlide);
    }

    return(
        <>
            {Object.keys(products).map((key: string) => (

                <div className="slide" key={key}>
                    <div className={classes.SecondSectionContainer}>

                        <img className={classes.image} src="/logo.png" alt=""/>

                        <div className={classes.catalogPath}>
                            <p>
                                <a href="#1">WELCOME</a>/
                                <a href="#2">CATALOG</a>/
                                <a style={{color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'underline'}}>{activeSlide}</a>
                            </p>
                        </div>

                        <div className={classes.navigation1__container}>

                            <div className={classes.menu__container}>
                                <nav className={classes.menu__navigation}>

                                    <a href="#2"
                                       onClick={() => handleTabChange(classes.menu__firstItem, 'MOST-POPULAR')}>Catalog</a>
                                    <a href="#2/1"
                                       onClick={() => handleTabChange(classes.menu__secondItem, 'FARM-PRODUCTS')}>Farm
                                        products</a>
                                    <a href="#2/2"
                                       onClick={() => handleTabChange(classes.menu__thirdItem, 'DRINKS')}>Drinks</a>
                                    <a href="#2/3"
                                       onClick={() => handleTabChange(classes.menu__fourthItem, 'FOR-HOME')}>For
                                        home</a>

                                    <div className={`${classes.animation} ${activeTab}`}></div>

                                </nav>
                            </div>
                            <CartButton totalAmount={totalAmount} showModal={showModal}/>
                        </div>

                        <CatalogProducts products={products} handleAmountChange={handleAmountChange} k={key}/>

                    </div>

                </div>

            ))}
        </>
    )
}

export default MainProducts;
