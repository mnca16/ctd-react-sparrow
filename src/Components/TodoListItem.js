import React from "react";
import style from "./TodoListItem.module.css";

//This component renders each element of the list, and the remove button
//
const TodoListItem = ({ todo, onRemoveTodo, onEditTodo }) => {
  const [isToggle, setToggle] = React.useState(false);

  const [todoTitle, setTodoTitle] = React.useState(todo.fields.Title);

  const onChangeEdit = (e) => {
    setTodoTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEditTodo(todo.id, { fields: { Title: todoTitle } });
  };

  return (
    <div className={style.listItem_container}>
      <li className={style.listItem}>
        {isToggle ? (
          <form onSubmit={onSubmit}>
            <label htmlFor="edit"></label>
            <input id="edit" value={todoTitle} onChange={onChangeEdit} />
          </form>
        ) : (
          <p>{todo.fields.Title}</p>
        )}
        <button
          onClick={() => {
            setToggle(true);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            onRemoveTodo(todo.id);
          }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoListItem;
