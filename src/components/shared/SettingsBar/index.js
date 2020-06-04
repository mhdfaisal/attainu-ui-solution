import React from "react";

import { useAppData, useAppDispatch } from "../../../context";
import { RESET_PRODUCT_DATA } from "../../../context/types";

const SettingsBar = () => {
    const { products } = useAppData();
    const dispatch = useAppDispatch();
    const productsCount = (products || []).length;

    console.log(productsCount);

    const handleReloadClick = () => {
        window.location.reload();
    };

    const handleRefreshBtnClick = () => {
        dispatch({ type: RESET_PRODUCT_DATA });
    };
    return (
        <div>
            <button
                className="btn btn-success m-2"
                onClick={handleRefreshBtnClick}
                disabled={!productsCount}
            >
                <i className="fa fa-refresh"></i>
            </button>
            <button
                className="btn btn-primary m-2"
                disabled={productsCount}
                onClick={handleReloadClick}
            >
                <i className="fa fa-recycle"></i>
            </button>
        </div>
    );
};

export default SettingsBar;
