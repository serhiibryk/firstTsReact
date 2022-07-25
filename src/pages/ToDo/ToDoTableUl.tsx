import React, { FC, useRef, useState } from "react";

import { Input, Button, Checkbox } from "antd";

import { IToDoList } from "../../store";

interface IToDoTableUlProps {
  item: IToDoList;
  index: number;
  handleDelete: (id: number) => void;
  handleEdit: (id: number, value: string) => void;
  handleChange: (index: number) => void;
}

const ToDoTableUl: FC<IToDoTableUlProps> = ({
  item,
  index,
  handleDelete,
  handleEdit,
  handleChange,
}) => {
  const [show, setShow] = useState(false);
  const input: any = useRef(null);
  return (
    <ul>
      <h3 className="todo-List-Number">{item.id} цель</h3>

      <li
        style={
          item.compleated === true
            ? {
                textDecoration: "line-through",
                fontSize: "25px",
                padding: "10px",
              }
            : { fontSize: "25px", padding: "10px" }
        }
      >
        {show ? (
          <Input
            // style={{ padding: "15px 0px 15px" }}
            className="edit-Input"
            defaultValue={item.description}
            placeholder="Введите изменение"
            ref={input}
          />
        ) : (
          item.description
        )}
      </li>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          onClick={() => {
            handleEdit(index, input?.current?.value);
            setShow(!show);
          }}
        >
          РЕДАКТИРОВАТЬ
        </Button>
        <div style={{ padding: "3px 20px" }}>
          <span className="todo-Checkbox-Title">статус: </span>
          <Checkbox
            className="todo-Checkbox"
            type="checkbox"
            defaultChecked={item.compleated}
            onChange={() => handleChange(item.id)}
          />
        </div>
        <Button onClick={() => handleDelete(item.id)}>УДАЛИТЬ</Button>
      </div>
      <hr style={{ border: "2px solid grey" }} />
    </ul>
  );
};

export default ToDoTableUl;
