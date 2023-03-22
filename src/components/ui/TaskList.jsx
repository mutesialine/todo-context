import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AppContext } from "../../App";
const TaskList = () => {
  const {
    task,
    isTaskDone,
    oneTask,
    taskName,
    handleTaskDelete,
    handleTaskDone,
  } = useContext(AppContext);
  return (
    <div className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2">
      <div className="flex gap-x-5 items-center">
        <input
          type="checkbox"
          checked={task.isTaskDone}
          name={"isTaskDone"}
          id={id}
          onChange={() => handleTaskDone(oneTask.id)}
          className="w-4 h- cursor-pointer"
        />
        <label
          className={`text-2xl text-center text-gray-700 font-semibold ${
            oneTask.isTaskDone && "line-through"
          }`}
          htmlFor="isTaskDone"
        >
          {taskName}
        </label>
      </div>
      <div
        className="p-2 bg-gray-200 rounded-full cursor-pointer"
        onClick={() => handleTaskDelete(oneTask.id)}
      >
        <AiFillDelete size={24} className="text-red-500" />
      </div>
    </div>
  );
};
export default TaskList;
