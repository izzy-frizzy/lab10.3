
import { useContext } from "react";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";
import FilterButtons from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./App.css";



export default function App() {
  return (
    <ThemeProvider>
      <FilterProvider>
        <TodoProvider>
          <ThemeToggleButton />
      <TodoInput />
      <TodoList />
      <FilterButtons />
        </TodoProvider>
      </FilterProvider>
    </ThemeProvider>
  );
}