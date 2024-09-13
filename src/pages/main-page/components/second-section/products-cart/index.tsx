import classes from "./classes.module.css";
import { useFunctions } from "../../../../../context/context.tsx";

interface Item {
    url: string,
    name: string,
    price: number,
    mass: string,
    amount: number,
}

const CartProducts = () => {
    const {products, handleAmountChange} = useFunctions();

    return(
        <>
            <div id="scrollable-element" className={classes.modalCart__items}>
                {Object.keys(products).map((key: string) => (

                    products[key]
                        .filter((product: Item) => product.amount !== 0)
                        .map((product: Item, i: number) => (
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
