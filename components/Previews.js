import React from "react";
import Preview from "./Preview";

const Previews = ({ tetrominos }) => {
    // We want everything except the last one
    const previewTetrominos = tetrominos
        .slice(1 - tetrominos.length)
        .reverse();
        
    
    return (
        <>
            {previewTetrominos.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </>
    );
};

export default React.memo(Previews);