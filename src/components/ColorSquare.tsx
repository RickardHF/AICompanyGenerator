import React from 'react';

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
        <div className='color-square' style={style} onClick={onClick}></div>
    );
};

export default ColorSquare;