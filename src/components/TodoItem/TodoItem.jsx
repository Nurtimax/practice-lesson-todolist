import React from "react";

const TodoItem = ({ name, setName, age, setAge, setDate, date,getDataByUsers }) => {
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };

  const changeDateHandler = (e) => {
    setDate(e.target.value);
  };

  const getUserData = () => {
    const userData = {
        name: name,
        age: age, 
        date: date
    }
    // console.log(userData);
    getDataByUsers(userData)
  }

  return (
    <div>
      <input type="text" value={name} onChange={changeNameHandler} />
      <input type="number" value={age} onChange={changeAgeHandler} />
      <input type="date" value={date} onChange={changeDateHandler} />
      <button onClick={getUserData}>Send</button>
    </div>
  );
};

export default TodoItem;
