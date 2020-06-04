import React from "react";

import "./style.css";

const ProductListItem = () => {
    return (
        <div className="row">
            <div className="col-md-1">
                <span className="badge m-2 badge-warning product-list-badge__text">Zero</span>
            </div>
            <div className="col-md-4">
                <button className="btn btn-secondary">
                    <i className="fa fa-plus-circle"></i>
                </button>
                <button className="btn btn-info m-2" disabled={true}>
                    <i className="fa fa-minus-circle"></i>
                </button>
                <button className="btn btn-danger">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductListItem;
