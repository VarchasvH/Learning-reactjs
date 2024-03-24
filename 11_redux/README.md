# About Redux

- **Redux** provides centralized state management and predictable data flow.

- **Redux-Toolkit** is opinionated, batteries-included toolset for efficient Redux development.

# Four Main Parts inside Redux

1. **`Store:`** Single source of Truth. It can have mini-stores inside it.
2. **`Reducer:`** Decides which mini store is to be changed.
3. **`useSelector`**: To select a value from the store.
4. **`useDispatch`**: To dispatch a value from the store.

## Initialization

[We need to first initialize redux and react redux.](https://redux-toolkit.js.org/introduction/getting-started)

# Code

## Reducer

Inside a Reducer, we will always get a state and an action.

`reducer1: (state, action) => {}`

State: Current state && Action: Data passed.

```js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello-World!" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

## Process to Create a Store

Where we create a store is opinionated, in this example we will create it inside src/app/store.js.

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "..features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

## Dispatch changes values in a store by using a reducer.
