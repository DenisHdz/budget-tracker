import React, { useState } from "react";

const EditBudget = (props) => {
  const { budget, handleSaveClick } = props;
  const [value, setValue] = useState(budget);

  return (
    <>
      <input
        type="number"
        class="form-control mr-3"
        id="name"
        value={value}
        required
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary"
        required
        onClick={() => handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
