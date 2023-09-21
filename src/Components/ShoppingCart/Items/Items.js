import React from "react";

const Items = (props)=>{
    const {productsCart} = props
    return(
        <div>
            <h4>Esse é o item do carrinho!</h4>
            <p>{productsCart}</p>
        </div>
    )
}
export default Items;