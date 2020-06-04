import React from "react";

import {
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    DELETE_PRODUCT,
} from "../../../../context/types";
import { useAppDispatch } from "../../../../context";

import "./style.css";

const ProductListItem = ({ product }) => {
    const { productId, qty } = product;
    const dispatch = useAppDispatch();

    const handlePlusBtnClick = () => {
        dispatch({ type: INCREASE_PRODUCT_COUNT, payload: { productId } });
    };

    const handleMinusBtnClick = () => {
        dispatch({ type: DECREASE_PRODUCT_COUNT, payload: { productId } });
    };

    const handleTrashBtnClick = () => {
        dispatch({ type: DELETE_PRODUCT, payload: { productId } });
    };
    return (
        <div className="row">
            <div className="col-md-1">
                <span
                    className={
                        qty
                            ? "badge m-2 badge-primary product-list-badge__text"
                            : "badge m-2 badge-warning product-list-badge__text"
                    }
                >
                    {qty || "Zero"}
                </span>
            </div>
            <div className="col-md-4">
                <button className="btn btn-secondary" onClick={handlePlusBtnClick}>
                    <i className="fa fa-plus-circle"></i>
                </button>
                <button className="btn btn-info m-2" disabled={!qty} onClick={handleMinusBtnClick}>
                    <i className="fa fa-minus-circle"></i>
                </button>
                <button className="btn btn-danger" onClick={handleTrashBtnClick}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductListItem;
