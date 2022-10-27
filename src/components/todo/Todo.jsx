import React from "react";
import { useState } from "react";
import TodoList from "../todo-list/TodoList";
import TodoItem from "../TodoItem/TodoItem";

const Todo = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const [isEdit, setIsEdit] = useState(true)

  const [data, setData] = useState([
    {
      id: Math.random(),
      name: "aktilek",
      age: 16,
      date: "20-02-2007",
      completed: true,
      edit: true
    },
    {
      id: Math.random(),
      name: "aktilek",
      age: 16,
      date: "20-02-2007",
      completed: true,
      edit: true
    },
    {
      id: Math.random(),
      name: "aktilek",
      age: 16,
      date: "20-02-2007",
      completed: true,
      edit: true
    },
  ]);
  const getDataByUsers = (dataByUser) => {
    let newArr = [...data];
    newArr.unshift({
      id: Math.random(),
      name: dataByUser.name,
      age: dataByUser.age,
      date: dataByUser.date,
      completed: true,
      edit: true
    });
    setData(newArr);
  };

  //   let local = JSON.parse(localStorage.getItem('items'))
  const dataCompletedHandler = (id) => {
    let newArr = [...data].filter((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setData(newArr);
  };

  const dataRemoveHandler = (id) => {
    let newArr = [...data].filter((user) => user.id !== id);
    setData(newArr);
  };

  const dataEditHandler = (id, edit) => {
    setIsEdit(false)
    let newArr = [...data].filter((user) => {
        if (user.id === id) {
            user.edit = !user.edit
        }
        return user
    })
    setData(newArr)
  }

  return (
    <div>
      <TodoItem
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        date={date}
        setDate={setDate}
        getDataByUsers={getDataByUsers}
      />
      <TodoList
        data={data}
        hello={dataCompletedHandler}
        removeItem={dataRemoveHandler}
        isEdit={isEdit}
        setIsEdit={dataEditHandler}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        date={date}
        setDate={setDate}
        getDataByUsers={getDataByUsers}
      />
    </div>
  );
};

export default Todo;
