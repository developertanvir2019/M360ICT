import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="container flex justify-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">Todo List App</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
