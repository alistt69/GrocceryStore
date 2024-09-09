import classes from "./classes.module.css";
import React from "react";

const CartProducts: React.FC<{
    products: any,
    handleAmountChange: (key: string, productName: string, operation: number, productPrice: number) => void 
}> = ({ products, handleAmountChange }) => {

    return(
        <>
            <div id="scrollable-element" className={classes.modalCart__items}>
                {Object.keys(products).map((key: string) => (

                    products[key]
                        .filter((product: any) => product.amount !== 0)
                        .map((product: any, i: number) => (
                            <div className={classes.modalCart__itemCards} key={i}>
                                <div className={classes.itemCard__imgContainer}>
                                    <img src={product.url} alt={""}/>
                                </div>

                                <div className={classes.itemCard__InfoContainer}>

                                    <div className={classes.itemCard__nameCategory}>
                                        {product.name.toUpperCase()} • {key.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
                                    </div>

                                    <div className={classes.itemCard__priceAmountContainer}>

                                        <div>${product.price / 100}</div>
                                        <div className={classes.itemCard__amountContainer}>
                                            <button
                                                disabled={product.amount === 1}
                                                onClick={() => handleAmountChange(key, product.name, -1, -product.price)}
                                                style={{
                                                    cursor: product.amount === 1 ? "not-allowed" : undefined
                                                }}>
                                                −
                                            </button>

                                            {product.amount}
                                            <button
                                                onClick={() => handleAmountChange(key, product.name, 1, product.price)}>
                                                +
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                ))}
            </div>
        </>
    )

}

export default CartProducts;
