import { useContext, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import ToDoContext from "../context/ToDoContext";
const TaskList = () => {
  const {
    toDo,
    handleTaskDone,
    handleTaskDelete,
    handleTaskUpdate,
    handleTaskEdit,
  } = useContext(ToDoContext);
  const [editingValue, setEditingValue] = useState("");
  const handleEdit = (task) => {
    setEditingValue(task.taskName);
    handleTaskEdit(task.id);
  };
  return toDo.length > 0 ? (
    toDo.map((oneTask, id) => (
      <div
        className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2"
        key={id}
      >
        {oneTask.isEdited === false ? (
          <div className="flex gap-x-5 items-center">
            <input
              type="checkbox"
              checked={oneTask.isTaskDone}
              onChange={() => handleTaskDone(oneTask.id)}
              className="w-4 h-4 outline-none cursor-pointer"
            />
            <label
              className={`text-3xl text-center text-white font-semibold ${
                oneTask.isTaskDone && "line-through"
              }`}
              htmlFor="isTaskDone"
            >
              {oneTask.taskName}
            </label>
          </div>
        ) : (
          <div className="w-full pl-8">
            <input
              type="text"
              value={editingValue}
              className="text-3xl font-semibold text-white bg-transparent outline-none"
              onChange={(event) => setEditingValue(event.target.value)}
              onMouseLeave={() =>
                handleTaskUpdate({ taskName: editingValue }, oneTask.id)
              }
            />
          </div>
        )}

        <div className="flex gap-x-2">
          <div
            className="p-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={() => handleEdit(oneTask)}
          >
            <AiFillEdit size={24} className="text-green-500" />
          </div>
          <div
            className="p-2 bg-gray-200 rounded-full cursor-pointer"
            onClick={() => handleTaskDelete(oneTask.id)}
          >
            <AiFillDelete size={24} className="text-red-500" />
          </div>
        </div>
      </div>
    ))
  ) : (
    <h2 className="text-4xl font-bold text-white pt-12">
      what your main focus today ?
    </h2>
  );
};
export default TaskList;
