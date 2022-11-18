import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Listing from "./Listing";

const LandingPage = () => {
  const [teamList, setTeamList] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(101);
  const [teamCount, setTeamCount] = useState(6);
  const [isListingActive, setListingActive] = useState(false);
  const [isClearSelection, setClearSelection] = useState(true);

  return (
    <div
      className={
        "landing-page" +
        (!isListingActive ? " landing-page--listing-inactive" : "")
      }
    >
      <Header
        employeeCount={employeeCount}
        setEmployeeCount={setEmployeeCount}
        teamCount={teamCount}
        setTeamCount={setTeamCount}
        setTeamList={setTeamList}
        setListingActive={setListingActive}
        setClearSelection={setClearSelection}
      />
      <Listing
        teamList={teamList}
        isClearSelection={isClearSelection}
        setClearSelection={setClearSelection}
      />
    </div>
  );
};

export default LandingPage;
