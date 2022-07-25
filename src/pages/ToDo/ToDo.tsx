import React from "react";

import TodoProvider from "../../store";
import ToDoTable from "./ToDoTable";

//реалізовать туду lіст через юзконтекст + юзстейти + юзефект

const ToDo = () => {
  return (
    <TodoProvider>
      <ToDoTable />
    </TodoProvider>
  );
};

export default ToDo;
