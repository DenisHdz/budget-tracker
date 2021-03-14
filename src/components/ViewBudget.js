import React from "react";

const ViewBudget = (props) => {
  const { budget, handleEditClick } = props;

  return (
    <>
      <span>Budget: £{budget}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
