import React from "react";
import Form from "./Form";
import HeaderBanner from "./HeaderBanner";

const Header = (props) => {
  const {
    employeeCount,
    setEmployeeCount,
    teamCount,
    setTeamCount,
    setTeamList,
  } = props;
  return (
    <div className="header">
      <HeaderBanner />
      <Form
        employeeCount={employeeCount}
        setEmployeeCount={setEmployeeCount}
        teamCount={teamCount}
        setTeamCount={setTeamCount}
        setTeamList={setTeamList}
        setListingActive={props.setListingActive}
        setClearSelection={props.setClearSelection}
      />
    </div>
  );
};

export default Header;
