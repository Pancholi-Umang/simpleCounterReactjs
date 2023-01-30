import {createStore} from "redux";

import RootReducered from "./reducer/index";

const store = createStore(RootReducered , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


// import { createStore } from "redux";
// import { applyMiddleware } from "redux";
// import RootReducered from "./reducer/index";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(
//     RootReducered,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;