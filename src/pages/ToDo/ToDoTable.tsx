import React, { ChangeEvent, useContext, useState } from "react";

import { Input, Button } from "antd";
import Item from "antd/lib/list/Item";

import { Context, IGlobalState, IToDoList } from "../../store";
import ToDoTableUl from "./ToDoTableUl";

const ToDoTable = () => {
  const globalState = useContext<IGlobalState | null>(Context);
  const [newTaskText, setNewTaskText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleAdd = () => {
    globalState?.handleAdd(newTaskText);
    setNewTaskText("");
  };

  return (
    <div>
      <div>
        <h2
          style={{ display: "flex", justifyContent: "center", margin: "20px" }}
        >
          TO DO LIST
        </h2>
        <hr style={{ border: "2px solid grey" }} />
      </div>
      <div>
        {globalState?.todoData.map((item, index) => (
          <ToDoTableUl
            key={index}
            index={index}
            item={item}
            handleDelete={globalState.handleDelete}
            handleEdit={globalState.handleEdit}
            handleChange={globalState.handleChange}
          />
        ))}
      </div>
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button type="primary" onClick={handleAdd}>
            СОЗДАТЬ НОВУЮ ЗАДАЧУ
          </Button>
          <Input
            value={newTaskText}
            onChange={handleChange}
            placeholder="Ввведите цель"
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoTable;
