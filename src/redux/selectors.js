import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterprioritiesSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterprioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state)

//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText)
//     })
//     return todosRemaining
// }

// export const searchTextSelector = (state) => state.filters.search
