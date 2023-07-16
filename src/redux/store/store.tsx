import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import { reducers } from "../rootReducer";
import rootSaga from "../rootSaga";

const persistConfig = {
  key: "ktmweb",
  storage,
  stateReconciler: hardSet,
};

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));

let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
