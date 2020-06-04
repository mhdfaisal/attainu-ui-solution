import React from "react";

const SettingsBar = () => {
    return (
        <div>
            <button className="btn btn-success m-2">
                <i className="fa fa-refresh"></i>
            </button>
            <button className="btn btn-primary m-2" disabled={true}>
                <i className="fa fa-recycle"></i>
            </button>
        </div>
    );
};

export default SettingsBar;
