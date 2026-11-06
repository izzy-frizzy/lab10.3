
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/Todolist";
import FilterButtons from "./components/FilterButton";
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./App.css";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Todos</h1>
      <ThemeToggleButton />
      <TodoInput />
      <TodoList />
      <FilterButtons />
    </div>
  );
}