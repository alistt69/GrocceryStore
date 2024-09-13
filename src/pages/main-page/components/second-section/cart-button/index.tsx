import classes from "./classes.module.css";
import { useFunctions } from "../../../../../context/context.tsx";

const CartButton = () => {

    const {showModal, totalAmount} = useFunctions();

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
