import React from "react";
import "./Loading.tsx.css";

interface LoadingProps {
    loading: boolean;
}

const Loading : React.FC<LoadingProps> = ({ loading }) => {
    const style: React.CSSProperties = {
        display: loading ? "flex" : "none"
    };

    return (
        <div className='loading-screen' style={style}>
            <img className='loading-spinner' src="/loading.svg"/>
            <p>Loading...</p>
        </div>
    );
}

export default Loading;