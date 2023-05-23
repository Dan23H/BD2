import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/auth";
// Importar más reducers aquí

const composeEnhancers = (
    (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
)

const reducers = combineReducers({
    auth: authReducer,
    // Definir más reducers aquí
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)