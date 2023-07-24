import React, { Fragment, useState } from "react";

const InputReviews = () => {
    //this is the active state, and allows you to change the state
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
    <div className="text-center">
    <img src="images/weight.jpg" className="img-fluid rounded b-shadow-a" width="500px" alt="" />
      <h1 className="text-center mt-5">Pumping Iron</h1>
      <h2 className="text-center mt-5">Weight Lifting Tracker App</h2>
    </div>

      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputReviews;