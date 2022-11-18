import React from "react";

const ClearSelection = (props) => {
  const { setClearSelection } = props;

  return (
    <div
      className="table__clear-selection"
      onClick={() => setClearSelection(true)}
    >
      Clear selection
    </div>
  );
};

export default ClearSelection;
