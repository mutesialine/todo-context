import { useState, createContext } from "react";
import { nanoid } from "nanoid";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [toDo, setAllToDo] = useState([]);

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };

  const handleTaskAdd = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: nanoid(),
        taskName: task,
        isTaskDone: false,
        isEdited: false,
      };
      setAllToDo((prevToDoList) => [...prevToDoList, newTask]);
      setTask("");
    }
  };

  const handleTaskDone = (id) => {
    setAllToDo((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, isTaskDone: !task.isTaskDone } : task
      )
    );
  };
  const handleTaskDelete = (id) => {
    setAllToDo((prevToDoList) => prevToDoList.filter((item) => item.id !== id));
  };

  const handleTaskEdit = (id) => {
    setAllToDo((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, isEdited: !task.isEdited } : task
      )
    );
  };

  const handleTaskUpdate = (newTask, id) => {
    setAllToDo((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, ...newTask, isEdited: false } : task
      )
    );
  };

  return (
    <ToDoContext.Provider
      value={{
        handleOnChange,
        handleTaskAdd,
        task,
        toDo,
        handleTaskDone,
        handleTaskDelete,
        handleTaskUpdate,
        handleTaskEdit,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
export default ToDoContext;
