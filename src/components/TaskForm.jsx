import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { PriorityOptions } from "../Constance/constance";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch(addTask({ name: taskName, priority, completed: false }));
      setTaskName("");
      setPriority("low");
    }
  };

  const newData = useSelector((data) => data.tasks);
  console.log(newData);
  return (
    <div className="mb-4">
      <input
        type="text"
        className="border rounded py-2 px-4 mr-2"
        placeholder="Enter task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select
        className="border rounded py-2 px-4 mr-2"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        {PriorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
