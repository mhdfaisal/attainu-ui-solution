import React from "react";

import "./style.css";

const Navigation = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                <i className="fa fa-shopping-cart fa-lg m-2"></i>
                <span className="badge badge-pill badge-info m-2 nav-count__badge">0</span>
                Items
            </div>
        </nav>
    );
};

export default Navigation;
