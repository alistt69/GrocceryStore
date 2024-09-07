import { ShoppingOutlined, CheckCircleOutlined, CloseCircleOutlined} from "@ant-design/icons";
import React, { useEffect, useRef, useState} from "react";
import { Modal, notification } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import classes from "./classes.module.css";
import ProductsMain from "./products-main";
import ProductsCart from "./products-cart";
import CatalogNavigation from "../../../components/catalog-navigation";

const SecondSection = () => {

    const [products, setProducts] = useState<Record<any, any>>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : {
            mostPopular: [
                {url: "/src/images/products/good3.jpg", name: 'FRUIT MIX', mass: '500g', price: 1000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 1', mass: '500g', price: 20000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 2', mass: '500g', price: 2, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 3', mass: '500g', price: 2000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 4', mass: '500g', price: 200, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 5', mass: '500g', price: 200, amount: 0},
            ],
            farmProducts: [
                {url: "/src/images/products/good3.jpg", name: 'Fruit mix2', mass: '500g', price: 100, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 6', mass: '500g', price: 20000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 7', mass: '500g', price: 2, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 8', mass: '500g', price: 2000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 9', mass: '500g', price: 200, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 10', mass: '500g', price: 200, amount: 0},
            ],
            drinks: [
                {url: "/src/images/products/good3.jpg", name: 'Fruit mix3', mass: '500g', price: 100, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 11', mass: '500g', price: 20000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 12', mass: '500g', price: 2, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 13', mass: '500g', price: 2000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 14', mass: '500g', price: 200, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 15', mass: '500g', price: 200, amount: 0},
            ],
            forHome: [
                {url: "/src/images/products/good3.jpg", name: 'Fruit mix', mass: '500g', price: 100, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 16', mass: '500g', price: 20000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 17', mass: '500g', price: 2, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 18', mass: '500g', price: 2000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 19', mass: '500g', price: 200, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Item 20', mass: '500g', price: 200, amount: 0},
            ]
        }
    });

    localStorage.setItem('products', JSON.stringify(products));


    const storedValue = localStorage.getItem('totalAmount');
    const initialAmount = storedValue ? JSON.parse(storedValue) : 0;
    const [totalAmount, setTotalAmount] = useState<number>(initialAmount);
    localStorage.setItem('totalAmount', JSON.stringify(totalAmount));

    const totalPriceFromLocalStorage = localStorage.getItem('totalPrice');
    const initialTotalPrice = totalPriceFromLocalStorage ? JSON.parse(totalPriceFromLocalStorage) : 0;
    const [totalPrice, setTotalPrice] = useState<number>(initialTotalPrice);
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

    const handleAmountChange = (category: string, name: string, operation: number, price: number) => {
        setProducts(prevProducts => {
            const updatedCategory = prevProducts[category].map((product: { name: string; amount: number; }) => {
                if (product.name === name) {

                    return { ...product, amount: product.amount + operation };
                }
                return product;
            });

            return {
                ...prevProducts,
                [category]: updatedCategory
            };
        });



        let totalA = operation
        let totalP = price

        for (const category of Object.values(products)) {

            category.forEach((product: { amount: number; price: number; }) => {

                totalA += product.amount;
                totalP += product.price * product.amount;

            });
        }
        setTotalAmount(totalA);
        setTotalPrice(totalP);
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    }

    const resetAmounts = () => {
        setProducts((prevProducts) => ({
            ...prevProducts,
            mostPopular: prevProducts.mostPopular.map((product: any) => ({ ...product, amount: 0 })),
            farmProducts: prevProducts.farmProducts.map((product: any) => ({ ...product, amount: 0 })),
            drinks: prevProducts.drinks.map((product: any) => ({ ...product, amount: 0 })),
            forHome: prevProducts.forHome.map((product: any) => ({ ...product, amount: 0 })),
        }));
    };

    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement | null>(null);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [deliveryTime, setDeliveryTime] = useState<string>('')


    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };


    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    const intervalIDRef = useRef<any>(null);

    useEffect(() => {
        intervalIDRef.current = setInterval(() => {
            setDeliveryTime(new Date(new Date().getTime() + 30 * 60000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', hour12: false }))
        }, 1000)

        return () => clearInterval(intervalIDRef.current);
    }, [open])

    const [api, contextHolder] = notification.useNotification();


    const openNotification = () => () => {

        let noticeMessage: string = 'SUCCESSFULLY ORDERED'
        let noticeDescription: string = 'WE ARE ALREADY ASSEMBLING YOUR ORDER!'
        let noticeIcon: any = <CheckCircleOutlined style={{color: 'darkgreen'}}/>

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
            <CatalogNavigation />
            <Modal
                title={
                    <div
                        style={{width: 'auto', cursor: 'move', margin: '0', paddingLeft: '20px'}}
                        onMouseOver={() => {
                            if (disabled) {
                                setDisabled(false);
                            }
                        }}
                        onMouseOut={() => {
                            setDisabled(true);
                        }}

                        onFocus={() => {
                        }}
                        onBlur={() => {
                        }}

                        className={classes.modalCart__header}
                    >
                        YOUR CART
                    </div>
                }
                centered
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                className='modalCart'
                modalRender={(modal) => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        nodeRef={draggleRef}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                <div className={classes.modalCart__body}>
                    <div className={classes.modalCart__itemsContainer}>
                        <ProductsCart products={products} handleAmountChange={handleAmountChange} />
                        <div className={classes.modalCart__totalPrice}>
                            TOTAL: ${totalPrice / 100}
                        </div>
                    </div>
                    <div className={classes.modalCart__orderContainer}>
                        <div className={classes.modalCart__orderInfo}>

                            <div className={classes.orderInfo__formsContainer}>
                                <input type="input" className={classes.form__field} placeholder="address" id="address"
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
            </Modal>

            <button className={classes.ShoppingCartContainer} onClick={showModal} disabled={totalAmount === 0} style={{
                opacity: !totalAmount ? "0.5" : undefined,
                cursor: !totalAmount ? "not-allowed" : undefined,
            }}>
                <ShoppingOutlined/>
                {totalAmount != 0 && <div className={classes.ShoppingCartAmount}>{totalAmount}</div>}

            </button>

            <ProductsMain products={products} handleAmountChange={handleAmountChange} />
        </>
    )

}

export default SecondSection;