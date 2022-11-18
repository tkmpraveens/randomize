import React from "react";
import Cell from "./Cell";

const Row = (props) => {
  const { row, rowIndex, isHeader } = props;

  const cellList = row?.map((cell, index) => {
    return (
      <Cell
        key={index}
        cell={cell}
        rowIndex={rowIndex}
        cellIndex={index}
        isHeader={isHeader}
        isClearSelection={props.isClearSelection}
        setClearSelection={props.setClearSelection}
      />
    );
  });

  return <div className="row">{cellList}</div>;
};

export default Row;
