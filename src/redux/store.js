// //Redux Core

// import { createStore } from "redux";
// import rootReducer from "./reducer";

// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

//Redux Toolkits
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/Todolist/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todoList: todoListReducer.reducer,
  },
});

export default store;
