import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

const initialState = [
    { productId: 1, qty: 0 },
    { productId: 2, qty: 0 },
    { productId: 3, qty: 0 },
    { productId: 4, qty: 0 },
];

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
        </AppDispatchContext.Provider>
    );
};

export default AppContextProvider;
