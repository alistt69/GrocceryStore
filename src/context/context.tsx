import React, {createContext, useContext, useRef, useState} from 'react';
import type {DraggableData, DraggableEvent} from "react-draggable";

interface Item {
    url: string,
    name: string,
    price: number,
    mass: string
    amount: number,
}

interface products {
    [category: string]: Item[];
}

interface ContextType {
    handleAmountChange: (category: string, name: string, operation: number, price: number) => void;
    products: products,
    setProducts: (products: products) => void,
    totalAmount: number,
    setTotalAmount: (totalAmount: number) => void,
    resetAmounts: () => void,
    open: boolean,
    setOpen: (open: boolean) => void,
    showModal: () => void,
    disabled: boolean,
    setDisabled: (setDisabled: boolean) => void,
    bounds: {left: number, top: number, bottom: number, right: number},
    handleOk: () => void,
    handleCancel: () => void,
    onStart: (event: DraggableEvent, uiData: DraggableData) => void,
    totalPrice: number,
    draggleRef: React.RefObject<HTMLDivElement>
}

const FunctionsContext = createContext<ContextType | undefined>(undefined);

export const FunctionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [products, setProducts] = useState<products>(() => {
        const storedProducts = localStorage.getItem('products');
        return storedProducts ? JSON.parse(storedProducts) : {
            mostPopular: [
                {url: "/src/images/products/most-popular/chips.jpg", name: "Chips with salt", mass: '140g', price: 299, amount: 0},
                {url: "/src/images/products/most-popular/milk.jpg", name: 'Milk', mass: '980ml', price: 200, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Tomatoes', mass: '1kg', price: 99, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Sour cream', mass: '280g', price: 175, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Mozzarella', mass: '400g', price: 500, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Bread', mass: '120g', price: 69, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Eggs C1', mass: '10 pcs', price: 2000, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'KitKat', mass: '35g', price: 100, amount: 0},
                {url: "/src/images/products/good3.jpg", name: 'Monster mango-loco', mass: '480ml', price: 249, amount: 0},
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
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
            mostPopular: prevProducts.mostPopular.map((product: Item) => ({ ...product, amount: 0 })),
            farmProducts: prevProducts.farmProducts.map((product: Item) => ({ ...product, amount: 0 })),
            drinks: prevProducts.drinks.map((product: Item) => ({ ...product, amount: 0 })),
            forHome: prevProducts.forHome.map((product: Item) => ({ ...product, amount: 0 })),
        }));
    };

    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement | null>(null);


    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
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

    return (
        <FunctionsContext.Provider value={{
            handleAmountChange,
            products,
            setProducts,
            totalAmount,
            setTotalAmount,
            resetAmounts,
            open,
            setOpen,
            showModal,
            disabled,
            setDisabled,
            bounds,
            handleOk,
            handleCancel,
            onStart,
            totalPrice,
            draggleRef,
        }}>
            {children}
        </FunctionsContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFunctions = () => {
    const context = useContext(FunctionsContext);
    if (!context) {
        throw new Error;
    }

    return context;
};
