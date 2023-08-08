import React from 'react';
import styles from './ColorSquare.module.css';

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
        <div className={styles.container}  onClick={onClick}>
            <div className={styles.square} style={style}></div>
            <p>{color}</p>
        </div>
    );
};

export default ColorSquare;