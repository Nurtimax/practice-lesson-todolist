import React from "react";
import { useState } from "react";
import { TodoListStyle } from "../styles/Styles";

const TodoList = ({ data, hello, removeItem, isEdit, setIsEdit, setName, name }) => {

    // const [editName, setEditName] = useState()

    // const changeName = (name) => {
    //     setEditName(name)
    //     console.log(editName);
    // }

  return (
    <div>
      {data.map((user) => (
        <TodoListStyle isValid={user.completed} key={user.id}>
          {user.edit ? (
            <>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.date}</div>
            </>
          ) : (
            <>
              <input type="text" value={name} onChange={(e) => setName(e.target.value) }   />
              <input type="number" value={user.age} />
              <input type="text" value={user.date} />
              <button>save</button>
            </>
          )}
          {user.edit ? (
            <>
              {" "}
              <button onClick={() => setIsEdit(user.id, user.edit)}>edit</button>
              <button onClick={() => hello(user.id)}>completed</button>
              <button onClick={() => removeItem(user.id)}>Delete</button>
            </>
          ) : null}
        </TodoListStyle>
      ))}
    </div>
  );
};

export default TodoList;
