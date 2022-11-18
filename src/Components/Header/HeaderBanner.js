import React from "react";

const HeaderBanner = () => {
  return (
    <div className="header__banner">
      <div className="header__logo">Randomize</div>
      <div className="header__title">
        Easily group your team members randomly
      </div>
      <div className="header__sub-title">
        It's very simple. <br />
        All you have to do is give the total number of employees, how many teams
        you want to group them into,
        <br /> and click on 'Group the team' button and there you go. Match the
        indexes with your employee list.
      </div>
    </div>
  );
};

export default HeaderBanner;
