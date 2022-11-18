import React from "react";

const Form = (props) => {
  const {
    employeeCount,
    setEmployeeCount,
    teamCount,
    setTeamCount,
    setTeamList,
    setListingActive,
    setClearSelection,
  } = props;

  const randomizeGroup = () => {
    let employeeList = Array.from(Array(employeeCount).keys());
    shuffle(employeeList);

    let teamList = [];
    for (let i = 0; i < employeeCount; i++) {
      if (i < teamCount) teamList[i % teamCount] = [];
      teamList[i % teamCount].push(employeeList[i]);
    }

    setTeamList(teamList);
    setListingActive(true);
    setClearSelection(true);
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <div className="form">
      <div className="label">Number of Employees</div>
      <input
        type="number"
        value={employeeCount}
        onChange={(e) => setEmployeeCount(parseInt(e?.target?.value ?? 0))}
      />

      <div className="label">Number of teams</div>
      <input
        type="number"
        value={teamCount}
        onChange={(e) => setTeamCount(parseInt(e?.target?.value ?? 0))}
      />

      <button onClick={randomizeGroup}>Group it</button>
    </div>
  );
};

export default Form;
