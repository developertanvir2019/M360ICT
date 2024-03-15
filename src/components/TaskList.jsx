import { useSelector, useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/taskSlice";
import { PriorityColors } from "../Constance/constance";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Using useSelector to get tasks from Redux store
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <div
              className={`flex items-center ${
                task.completed ? "line-through" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleComplete(task.id)}
                className="mr-2"
              />
              <span>{task.name}</span>
            </div>
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              <span
                className={`px-2 py-1 rounded font-bold text-sm ${
                  PriorityColors[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
