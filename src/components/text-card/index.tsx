import React from "react";


interface TextCardProps {
    iconHeader: string,
    iconDescription: string,
}


const Index: React.FC<TextCardProps> = (props) => {

    return(

        <>

            <div style={{fontSize: "20px", fontWeight: "bold", marginTop: "15px"}}>{props.iconHeader}</div>
            <div style={{fontSize: "17px", justifyItems: "end"}}>{props.iconDescription}</div>

        </>

    );
};


export default Index;
