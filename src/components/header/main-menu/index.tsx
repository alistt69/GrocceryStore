import classes from "./classes.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Collapse, Drawer} from "antd";
import type {CollapseProps} from "antd";

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'How to cancel the order',
        children: <p>Lorem1</p>,
    },
    {
        key: '2',
        label: 'How to unlink your credit card',
        children: <p>Lorem2</p>,
    },
    {
        key: '3',
        label: 'How does the referral work',
        children: <p>Lorem3</p>,
    },
];

const MainMenu = () => {

    const [activeTab, setActiveTab] = useState(classes.headerMenu__firstItem)

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
    }

    const navigate = useNavigate();

    const handleClick = (address: string) => {
        navigate(address);
    };

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        handleTabChange(classes.start_faq)
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return(
        <>
            <div className={classes.menu__container}>
                <nav className={classes.menu__navigation}>
                    <a href="#1" onClick={() => handleTabChange(classes.menu__firstItem)}>Welcome</a>
                    <a href="#2" onClick={() => handleTabChange(classes.menu__secondItem)}>Catalog</a>
                    <a href="#3" onClick={() => handleTabChange(classes.menu__thirdItem)}>Contacts</a>
                    <a onClick={showDrawer}>FAQ</a>
                    <a onClick={() => handleClick('/about')}>About</a>
                    <Drawer title="Frequently Asking Questions" onClose={onClose} open={open}>
                        <Collapse accordion items={items}/>
                    </Drawer>

                    <div className={`${classes.animation} ${activeTab}`}></div>
                </nav>
            </div>
        </>
    )
}

export default MainMenu;