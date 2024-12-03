import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";

export default function configureStore() {
    return createStore(rootReducer, devToolsEnhancer());
  }
