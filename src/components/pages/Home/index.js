import React from "react";

import Header from "../../shared/Header";
import SettingsBar from "../../shared/SettingsBar";
import ProductList from "../../shared/ProductList";

const Home = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <SettingsBar />
                <ProductList />
            </main>
        </div>
    );
};

export default Home;
