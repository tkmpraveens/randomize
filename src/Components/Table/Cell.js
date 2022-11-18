import React, { useEffect, useState } from "react";

const Cell = (props) => {
  const {
    cell,
    rowIndex,
    cellIndex,
    isHeader,
    isClearSelection,
    setClearSelection,
  } = props;

  const [isCellSelected, setcellSelected] = useState(false);

  useEffect(() => {
    if (isClearSelection) setcellSelected(false);
  }, [isClearSelection]);

  const handleCellSelection = () => {
    if (isClearSelection) setClearSelection(false);
    setcellSelected(!isCellSelected);
  };

  return (
    <>
      {isHeader && cellIndex === 0 && (
        <div className="cell cell__header" key="header">
          Employee/Team
        </div>
      )}
      {cellIndex === 0 && !isHeader && (
        <div
          className="cell cell__header"
          key={`rowIndex_${rowIndex}`}
        >{`Team ${rowIndex + 1}`}</div>
      )}

      {
        <div
          className={
            "cell" +
            (isCellSelected ? " cell--selected" : "") +
            (isHeader ? " cell--index" : "")
          }
          onClick={() => handleCellSelection()}
        >
          {isHeader ? `#` : ""}
          {cell + 1}
        </div>
      }
    </>
  );
};

export default Cell;
