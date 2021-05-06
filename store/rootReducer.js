// import { combineReducers } from "redux";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/reducer";

const persistConfig = {
  key: "prime-flix",
  storage: storage,
  blacklist: ["router"],
};
export default persistCombineReducers(persistConfig, {
  user: userReducer,
});
