import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = {
    products: [
        { productId: 1, qty: 0 },
        { productId: 2, qty: 0 },
        { productId: 3, qty: 0 },
        { productId: 4, qty: 0 },
    ],
    cart: [],
};

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
        </AppDispatchContext.Provider>
    );
};

export { AppContextProvider };
export const useAppDispatch = () => useContext(AppDispatchContext);
export const useAppData = () => useContext(AppStateContext);
