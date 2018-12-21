import authreducer from "./authreducer";
import MainReducer from "./MainReducer";
import ComponentsReducer from "./ComponentsReducer";
import { combineReducers } from "redux";

const CombineReducers = combineReducers({
  auth: authreducer,
  main: MainReducer,
  Comp: ComponentsReducer
});

export default CombineReducers;
