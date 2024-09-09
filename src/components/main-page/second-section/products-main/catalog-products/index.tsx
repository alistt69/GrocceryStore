import classes from "./classes.module.css";
import React from "react";

const CatalogProducts: React.FC<{

    products: any,
    handleAmountChange: (key: string, productName: string, operation: number, productPrice: number) => void,
    k: any

}> = ({ products, handleAmountChange, k }) => {

    return(
        <>
            <div className={classes.scrollableElement} id="scrollable-element">
                {products[k].map((product: any, i: number) => (
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
                                    onClick={() => products[k][i].amount === 0 && handleAmountChange(k, product.name, 1, product.price)}>
                                {
                                    products[k][i].amount === 0
                                        ?
                                        <>
                                            <p>${product.price / 100}</p>
                                        </>
                                        :
                                        <>
                                            <div className={classes.productCard__minusBtn}
                                                 onClick={() => handleAmountChange(k, product.name, -1, -product.price)}>
                                                –
                                            </div>

                                            {products[k][i].amount}

                                            <div className={classes.productCard__plusBtn}
                                                 onClick={() => handleAmountChange(k, product.name, 1, product.price)}>
                                                ＋
                                            </div>
                                        </>
                                }
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default CatalogProducts;