import React from 'react';
import './ColorSquare.tsx.css';

interface ColorSquareProps {
    color: string;
    size: number;
    onClick: () => void;
}

const ColorSquare : React.FC<ColorSquareProps> = ({ color, size, onClick }) => {
    const style: React.CSSProperties = {
        backgroundColor: color,
        width: size,
        height: size
    };

    return (
        <div className='color-square-container'  onClick={onClick}>
            <div className='color-square' style={style}></div>
            <p>{color}</p>
        </div>
    );
};

export default ColorSquare;