import React from "react";
import Row from "./Row";

const Table = (props) => {
  const { teamList } = props;

  const rowList = teamList?.map((row, index) => {
    let rowHeader = Array.from(Array(row.length).keys());
    return (
      <>
        {index === 0 && (
          <Row
            key="row_header"
            row={rowHeader}
            rowIndex={index}
            isHeader={true}
            isClearSelection={props.isClearSelection}
            setClearSelection={props.setClearSelection}
          />
        )}
        <Row
          key={index}
          row={row}
          rowIndex={index}
          isClearSelection={props.isClearSelection}
          setClearSelection={props.setClearSelection}
        />
      </>
    );
  });

  return <div className="table">{rowList ?? null}</div>;
};

export default Table;
