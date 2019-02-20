import React from "react";
import "./rules.css";

const Rules = props => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transition: props.show ? "opacity 1s" : "opacity .25s",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="modal-header">
        <h3>Game Rules</h3>
        <span className="close-modal-btn" onClick={props.close}>
          ×
        </span>
      </div>
      <div
        className="modal-body"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="rules">
          <div className="rules-body">
            <ul>
              <li>
                If the cell is alive **and** has 2 or 3 neighbors, then it
                remains alive. Else it dies.
              </li>
              <li>
                If the cell is dead **and** has exactly 3 neighbors, then it
                comes to life. Else if remains dead.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
