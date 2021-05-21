import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };
    dispatch({
      type:'ADD_EXPENSE',
      payload:expense
    });
    setCost('')
    setName('')
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row ">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            className="form-control"
            type="text"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm">
          <button type="submit" className="btn btn-sm btn-primary mt-3">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
