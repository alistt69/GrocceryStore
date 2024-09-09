import classes from "./classes.module.css";
import React from "react";

const CartButton: React.FC<{
    totalAmount: number, showModal: () => void
}> = ({ totalAmount, showModal  }) => {

    return(
        <>
            <button className={classes.cartBtn} onClick={showModal} disabled={totalAmount === 0} style={{
                opacity: !totalAmount ? "0.5" : undefined,
                cursor: !totalAmount ? "not-allowed" : undefined,
            }}>
                <a>CART</a>

            </button>
        </>
    )
}

export default CartButton;
