import { INCREASE_PRODUCT_COUNT, DECREASE_PRODUCT_COUNT, DELETE_PRODUCT } from "./types";

const reducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case INCREASE_PRODUCT_COUNT:
            const { productId } = payload;
            let products = [...state];
            const productIndex = products.findIndex((item) => {
                return productId === item.productId;
            });
            products[productIndex] = {
                ...products[productIndex],
                qty: products[productIndex].qty + 1,
            };
            return [...products];
        case DECREASE_PRODUCT_COUNT:
            return [];
        case DELETE_PRODUCT:
            return [];
        default:
            return state;
    }
};

export default reducer;
