import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { TodoContext } from "../context/TodoContext";

export default function FilterButtons() {
  const { filter, setFilter } = useContext(FilterContext);
  const { clearCompleted } = useContext(TodoContext);

  return (
    <div className="filters">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
      <button onClick={clearCompleted}>Clear completed</button>
    </div>
  );
}