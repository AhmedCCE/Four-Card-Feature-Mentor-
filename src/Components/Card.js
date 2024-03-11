import React from "react";
import "./Card.css";
import "../index.css";

const Card = (props) => {
  return (
    <>
      <div
        className={`card`}
        style={{ borderTopColor: props.color }}
      >
        <div className="text">
          <h2
            style={{
              marginBottom: "12px",
              color: "var(--Very-Dark-Blue)",
              fontWeight: 600,
            }}
          >
            {props.title}
          </h2>
          <p style={{ color: "var(--Grayish-Blue)", fontSize: "13px" }}>
            {props.body}
          </p>
        </div>
        <span style={{ display: "flex", justifyContent: "end" }}>
          {props.element}
        </span>
      </div>
    </>
  );
};

export default Card;
