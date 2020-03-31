import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
/*配置 redux-thunk*/
const composeEnHancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer=composeEnHancer(applyMiddleware(thunk));
const store=createStore(reducers,enhancer);
export default store;