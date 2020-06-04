import React from "react";

import ProductListItem from "./ProductListItem";
import { useAppData } from "../../../context";

const ProductList = () => {
    const { products } = useAppData();
    return (
        <div>
            {products.map((item, index) => {
                return <ProductListItem product={item} />;
            })}
        </div>
    );
};

export default ProductList;
