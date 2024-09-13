import classes from "./classes.module.css";
import CartProducts from "../products-cart";
import React, {useEffect, useRef, useState} from "react";
import {notification} from "antd";
import {CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import {useFunctions} from "../../../../../context/context.tsx";

const ModalContent = () => {

    const {resetAmounts, setTotalAmount, setOpen, open, totalPrice} = useFunctions();
    
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [deliveryTime, setDeliveryTime] = useState<string>('')

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const intervalIDRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        intervalIDRef.current = setInterval(() => {
            setDeliveryTime(new Date(new Date().getTime() + 30 * 60000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false }))
        }, 1000)

        return () => {
            if (intervalIDRef.current !== null) {
                clearInterval(intervalIDRef.current);
            }
        };
    }, [open])

    const [api, contextHolder] = notification.useNotification();


    const openNotification = () => () => {

        let noticeMessage: string = 'SUCCESSFULLY ORDERED'
        let noticeDescription: string = 'WE ARE ALREADY ASSEMBLING YOUR ORDER!'
        let noticeIcon: React.ReactNode = <CheckCircleOutlined style={{color: 'darkgreen'}}/>

        if (!selectedOption || !inputValue) {
            noticeMessage = 'CANCELLED'
            noticeDescription = 'FILL IN ALL THE REQUIRED FIELDS (DELIVERY ADDRESS & PAYMENT METHOD)'
            noticeIcon = <CloseCircleOutlined style={{color: 'darkred'}}/>
        } else {
            resetAmounts()
            setTotalAmount(0)
        }

        setOpen(!selectedOption || !inputValue)
        api.open({
            message: noticeMessage,
            description: noticeDescription,
            className: 'custom-notification',
            icon: noticeIcon,
            showProgress: true,
            pauseOnHover: true,
        });


    };

    return(
        <>
            <div className={classes.modalCart__body}>
                <div className={classes.modalCart__itemsContainer}>
                    <CartProducts />
                    <div className={classes.modalCart__totalPrice}>
                        TOTAL: ${totalPrice / 100}
                    </div>
                </div>
                <div className={classes.modalCart__orderContainer}>
                    <div className={classes.modalCart__orderInfo}>

                        <div className={classes.orderInfo__formsContainer}>
                            <input type="input" className={classes.form__field} placeholder="address"
                                   id="address"
                                   value={inputValue}
                                   onChange={handleChange} autoComplete="off"/>
                            <label htmlFor="address" className={classes.form__label}>ADDRESS</label>
                        </div>

                        <div className={classes.orderInfo__formsContainer}>
                            <input type="input" className={classes.form__field} placeholder="promo" id="promo"
                                   autoComplete="off"/>
                            <label htmlFor="promo" className={classes.form__label}>PROMOCODE</label>
                        </div>

                        <p className={classes.orderInfo__paymentText}>PAYMENT METHOD: {selectedOption}</p>

                        <div>
                            <label className={classes.orderInfo__paymentInput}>
                                <input
                                    type="radio"
                                    value="CASH"
                                    checked={selectedOption === 'CASH'}
                                    onChange={handleOptionChange}
                                />
                                <span className={classes.orderInfo__customRadio}></span>
                                cash
                            </label>
                            <label className={classes.orderInfo__paymentInput}>
                                <input
                                    type="radio"
                                    value="CREDIT CARD"
                                    checked={selectedOption === 'CREDIT CARD'}
                                    onChange={handleOptionChange}
                                />
                                <span className={classes.orderInfo__customRadio}></span>
                                credit card
                            </label>
                        </div>

                        <textarea className={classes.orderInfo_commentInput}
                                  placeholder='leave a comment for the courier'/>

                        <p className={classes.orderInfo__deliveryTime}>
                            approximate delivery time: {deliveryTime}
                        </p>

                    </div>
                    <div className={classes.orderInfo__btnContainer}>
                        {contextHolder}
                        <button className={classes.orderInfo__orderBtn} onClick={openNotification()}>
                            ORDER
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalContent;
