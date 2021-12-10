import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";



export const RootReducer = combineReducers({
    user: userReducer
});

export type RootReducers = ReturnType<typeof RootReducer>;