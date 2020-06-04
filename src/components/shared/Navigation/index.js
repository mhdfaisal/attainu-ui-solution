import React, { useState, useEffect } from "react";

import { useAppData } from "../../../context";

import "./style.css";

const Navigation = () => {
    const { products } = useAppData();
    const [itemsCountInCart, setItemsCountInCart] = useState(0);

    useEffect(() => {
        let itemsCountInCart = 0;
        products.forEach((item) => {
            if (item.qty > 0) {
                itemsCountInCart++;
            }
        });
        setItemsCountInCart(itemsCountInCart);
    }, [products]);
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                <i className="fa fa-shopping-cart fa-lg m-2"></i>
                <span className="badge badge-pill badge-info m-2 nav-count__badge">
                    {itemsCountInCart}
                </span>
                Items
            </div>
        </nav>
    );
};

export default Navigation;
