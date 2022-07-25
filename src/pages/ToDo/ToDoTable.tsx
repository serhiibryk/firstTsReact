import React, { ChangeEvent, useContext, useState } from "react";

import { Input, Button, Form } from "antd";
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
        <Form
          name="basic"
          onFinish={handleAdd}
          style={{ display: "flex", flexDirection: "row" }}
          autoComplete="off"
        >
          <Form.Item>
            <Button type="primary" htmlType="submit">
              СОЗДАТЬ НОВУЮ ЗАДАЧУ
            </Button>
          </Form.Item>

          <Form.Item
            name="newGoal"
            rules={[
              {
                pattern: /^[A-ZА-ЯЁ]+$/i,
                message: "Pls input only text",
              },
            ]}
          >
            <Input
              value={newTaskText}
              onChange={handleChange}
              placeholder="Ввведите цель"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ToDoTable;
