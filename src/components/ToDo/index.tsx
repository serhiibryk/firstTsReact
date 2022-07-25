// import React, { useRef } from "react";

// const List = ({ data, onChange, funcDelete, funcEdit }) => {
//   const editList = useRef(null);
//   return (
//     <div className="todo-List">
//       {data.map((item, index) => (
//         <ul key={index}>
//           <p className="todo-List-Number">{index + 1} цель</p>
//           <span className="todo-List-Time">
//             Дата создания задачи:
//             {item.time.toLocaleString()}
//           </span>
//           {item.show ? (
//             <input
//               className="edit-Input"
//               initial-value={item.description}
//               ref={editList}
//               placeholder="Введите изменение"
//             />
//           ) : null}
//           <button
//             className="edit-Button"
//             onClick={() =>
//               funcEdit(index, item.show ? editList.current.value : null)
//             }
//           >
//             РЕДАКТИРОВАТЬ
//           </button>
//           <button className="delete-button" onClick={() => funcDelete(index)}>
//             УДАЛИТЬ
//           </button>
//           <li
//             className="todo-List-Text"
//             style={
//               item.compleated === true ? { textDecoration: "line-through" } : {}
//             }
//           >
//             {item.description}
//           </li>
//           <span className="todo-Checkbox-Title">статус: </span>
//           <input
//             className="todo-Checkbox"
//             type="checkbox"
//             defaultChecked={item.compleated}
//             onChange={() => onChange(index)}
//           />

//           <hr style={{ border: "2px solid grey" }} />
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default List;
export const a = 1;
