import { useContext } from "react";
import ToDoContext from "../context/ToDoContext";
import { AiFillPlusCircle } from "react-icons/ai";
const TaskInput = () => {
  const { toDo, handleOnChange, task, handleTaskAdd } = useContext(ToDoContext);
  console.log(toDo);
  return (
    <div className="flex justify-between items-center p-4 w-[50%] rounded-full border shadow-3xl">
      <input
        type="text"
        name="taskName"
        value={task}
        onChange={handleOnChange}
        placeholder=" Add todo..."
        className="text-xl font-semibold w-full outline-none pl-8"
      />
      <AiFillPlusCircle
        size={30}
        className="text-green-800 w-18 cursor-pointer"
        onClick={handleTaskAdd}
      />
    </div>
  );
};

export default TaskInput;
