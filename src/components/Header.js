import React from "react";

function Header(prop) {
  return (
    <header>
      <h1 style={{ textAlign: "center", fontWeight: "600", color: "green" }}>
        {prop.title}
      </h1>
    </header>
  );
}

export default Header;
