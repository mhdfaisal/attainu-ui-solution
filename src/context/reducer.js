import {
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    DELETE_PRODUCT,
    RESET_PRODUCT_DATA,
} from "./types";

import { initialState } from "./index";

const reducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case INCREASE_PRODUCT_COUNT: {
            const { productId } = payload;
            let products = [...state.products];
            const productIndex = products.findIndex((item) => {
                return productId === item.productId;
            });
            if (productIndex !== -1) {
                products[productIndex] = {
                    ...products[productIndex],
                    qty: products[productIndex].qty + 1,
                };
            }
            return { ...state, products: [...products] };
        }
        case DECREASE_PRODUCT_COUNT: {
            const { productId } = payload;
            let products = [...state.products];
            const productIndex = products.findIndex((item) => {
                return productId === item.productId;
            });
            if (productIndex !== -1) {
                if (products[productIndex].qty > 0) {
                    products[productIndex] = {
                        ...products[productIndex],
                        qty: products[productIndex].qty - 1,
                    };
                }
            }
            return { ...state, products: [...products] };
        }
        case DELETE_PRODUCT:
            const { productId } = payload;
            const productsArrayAfterDeletion = state.products.filter((item) => {
                return item.productId !== productId;
            });

            return { ...state, products: [...productsArrayAfterDeletion] };
        case RESET_PRODUCT_DATA:
            return { ...initialState };
        default:
            return state;
    }
};

export default reducer;
