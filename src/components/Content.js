import React, { useState } from "react";

function Content() {
  const [displayText, setDisplayText] = useState("");

  const handleClick = () => {
    setDisplayText(document.getElementById("textarea").value);
  };

  return (
    <section style={{ marginLeft: "30vw" }}>
      <textarea id="textarea" rows="4" cols="50"></textarea> <br />
      <button
        style={{
          padding: "10px 15px",
          background: "#A76F6F",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "10px",
        }}
        onClick={handleClick}
      >
        Display Text
      </button>
      <h3 style={{ color: "#9336B4" }}>Your Text</h3>
      {displayText && (
        <p style={{ fontSize: "20px", color: "#2A2F4F" }}>
          <i>{displayText}</i>
        </p>
      )}
    </section>
  );
}

export default Content;
