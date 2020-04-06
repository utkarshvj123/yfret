import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { dashBoard } from "./dashboardReducers";

const rootReducer = combineReducers({
  homeData:homeReducer,
  dashboardData:dashBoard
});

export default rootReducer;
