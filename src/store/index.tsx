import React, { FC, useState, createContext, ReactNode } from "react";

export interface IToDoList {
  id: number;
  description: string;
  compleated: boolean;
}

export interface IGlobalState {
  todoData: IToDoList[];
  handleDelete: (id: number) => void;
  handleAdd: (text: string) => void;
  handleEdit: (id: number, value: string) => void;
  handleChange: (index: number) => void;
}

export const Context = createContext<IGlobalState | null>(null);

interface Props {
  children: ReactNode;
}

let count = 6;

const TodoProvider: FC<Props> = ({ children }) => {
  const [todoData, setTodoData] = useState<IToDoList[]>([
    { id: 1, description: "Сходить в магазин", compleated: false },
    { id: 2, description: "Вынести мусор", compleated: false },
    { id: 3, description: "Занятие йогой", compleated: false },
    { id: 4, description: "Поубирать в машине", compleated: false },
    { id: 5, description: "Урок английского", compleated: false },
  ]);

  const handleDelete = (id: number) => {
    const newArray = todoData.filter((task: IToDoList) => task.id !== id);
    setTodoData(newArray);
  };

  const handleAdd = (text: string) => {
    // setTodoData([
    //   ...todoData,
    //   {
    //     id: 1,
    //     description: text,
    //     compleated: false,
    //   },
    // ]);
    const newTask: IToDoList = {
      id: count,
      description: text,
      compleated: false,
    };
    count++;
    const newTasksList: IToDoList[] = todoData.concat(newTask);
    setTodoData(newTasksList);
  };

  const handleEdit = (index: number, value: string) => {
    if (value) {
      const copyList = [...todoData];
      copyList[index].description = value;
      setTodoData(copyList);
    }
  };

  const handleChange = (index: number) => {
    const copyList = [...todoData];
    copyList[index - 1].compleated = !copyList[index - 1].compleated;
    setTodoData(copyList);
  };

  return (
    <Context.Provider
      value={{
        todoData,
        handleDelete,
        handleAdd,
        handleEdit,
        handleChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default TodoProvider;
