import {createStore, combineReducers} from "redux";
import CountReducer from "./reducer/counter";
import ListeReducer from "./reducer/liste";

const reducers = combineReducers({
    counter: CountReducer,
    list: ListeReducer,
});

const store = createStore(reducers);
export default store;