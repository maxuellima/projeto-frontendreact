import React from "react";
import { ItemsStyled } from "./ItemsStyle";

const Items = (props)=>{
    const {productsCart} = props
    return(
        <ItemsStyled>
            {productsCart}
        </ItemsStyled>
    )
}
export default Items;