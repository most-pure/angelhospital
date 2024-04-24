import React from "react";

const ProductCard =({imgUrl, name}) => {
    return (
        <div>
            <div className="" 
            style={{ background:`url(${imgUrl})`,
             backgroundSize: "cover"}}>
             </div>
             <div>
                <h1>{name}</h1>
             </div>
        </div>
    )

};

export default ProductCard;