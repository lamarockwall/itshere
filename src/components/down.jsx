import React from "react";

const Down = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
       <h1>Page is Down for Repairs! Sorry Come back soon!</h1>
      </div>
    </section>
  );
};

export default Down;
