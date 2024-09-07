import classes from "./classes.module.css";
import React from "react";


const ProductsMain: React.FC<{

    products: any,
    handleAmountChange: (key: string, productName: string, operation: number, productPrice: number) => void,

}> = ({ products, handleAmountChange }) => {

    return(
        <>
            {Object.keys(products).map((key: string) => (


                <div className="slide" key={key}>
                    <div className={classes.SecondSectionContainer}>

                        <div className={classes.EContainer}>
                            Catalog Navigation
                        </div>

                        <div style={{marginLeft: "7px"}}>


                            <div className={classes.scrollableElement} id="scrollable-element">
                                {products[key].map((product: any, i: number) => (
                                    <div className={classes.box} key={i}>

                                        <div className={classes.productCard__imgContainer}>
                                            <img src={product.url} alt={""}/>
                                        </div>

                                        <div className={classes.productCard__nameContainer}>
                                            <p>{product.name}</p>
                                        </div>

                                        <div className={classes.productCard__massContainer}>
                                            <p>{product.mass}</p>
                                        </div>
                                        <div className={classes.productCard__buttonContainer}>
                                            <button className={classes.productCard__addBtn}
                                                    onClick={() => products[key][i].amount === 0 && handleAmountChange(key, product.name, 1, product.price)}>
                                                {
                                                    products[key][i].amount === 0
                                                        ?
                                                        <>
                                                            <p>${product.price / 100}</p>
                                                        </>
                                                        :
                                                        <>
                                                            <div className={classes.productCard__minusBtn}
                                                                 onClick={() => handleAmountChange(key, product.name, -1, -product.price)}>
                                                                –
                                                            </div>

                                                            {products[key][i].amount}

                                                            <div className={classes.productCard__plusBtn}
                                                                 onClick={() => handleAmountChange(key, product.name, 1, product.price)}>
                                                                ＋
                                                            </div>
                                                        </>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                </div>

            ))}
        </>
    )
}

export default ProductsMain;