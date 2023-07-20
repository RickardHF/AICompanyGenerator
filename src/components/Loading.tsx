import React from "react";
import "./Loading.tsx.css";
const loadingImage = require("../public/loading.svg");

interface LoadingProps {
    loading: boolean;
}

const Loading : React.FC<LoadingProps> = ({ loading }) => {
    const style: React.CSSProperties = {
        display: loading ? "flex" : "none"
    };

    return (
        <div className='loading-screen' style={style}>
            <img className='loading-spinner' src={loadingImage}/>
            <p>loading</p>
        </div>
    );
}

export default Loading;