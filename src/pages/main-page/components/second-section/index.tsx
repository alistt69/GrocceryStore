import React from "react";
import { Modal } from 'antd';
import Draggable from 'react-draggable';
import classes from "./classes.module.css";
import MainProducts from "./products-main";
import ModalContent from "./modal-content";
import { useFunctions } from "../../../../context/context.tsx";

const SecondSection: React.FC = () => {

    const {disabled, setDisabled, open, handleOk, handleCancel, bounds, draggleRef, onStart} = useFunctions();

    return(
        <>
            <div className="section" id="main-page2">

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
                    <ModalContent />
                </Modal>

                <MainProducts />
            </div>
        </>
    )

}

export default SecondSection;