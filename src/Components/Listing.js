import React, { useState } from "react";
import Table from "./Table/Table";
import ClearSelection from "./Table/ClearSelection";

const Listing = (props) => {
  const { teamList, isClearSelection } = props;

  return (
    <div className="listing">
      {!isClearSelection && (
        <ClearSelection setClearSelection={props.setClearSelection} />
      )}
      <Table
        teamList={teamList}
        isClearSelection={isClearSelection}
        setClearSelection={props.setClearSelection}
      />
    </div>
  );
};

export default Listing;
