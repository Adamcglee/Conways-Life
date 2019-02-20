import React from "react";
import "./about.css";

const About = props => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transition: props.show ? "opacity 1s" : "opacity .25s",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="modal-header">
        <h3>About Conway's Game of Life</h3>
        <span className="close-modal-btn" onClick={props.close}>
          ×
        </span>
      </div>
      <div
        className="modal-body"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="about">
          <div className="about-body">
            <p>
              In this learning project we explore Conway's Game of Life. The
              game involves an (infinite) two-dimensional grid with black and
              white squares, which may be represented as 1 and 0. One may think
              of them as "live cells" or "dead cells". The grid evolves. The
              evolution rule is as follows:
            </p>
            <ul>
              <li>All cells evolve simultaneously</li>
              <li>Each cell has eight neighbours</li>
              <li>
                An alive cell with two or three neighbours continues to live.
                Otherwise it dies.
              </li>
              <li>
                A dead cell with exactly three neighbours will become alive.
              </li>
            </ul>
            <p>
              From these simple forms it is possible to create stable and
              recursive patterns, such as the Gosper Glider Gun (illustrated).
            </p><br/>
            <p>
              The Game of Life is a prototypical example of a cellular
              automaton, an automatic machine of cells. It has attracted the
              interest of researchers in diverse fields. Patterns in Conway's
              Game of Life have been shown to be capable of emulating a
              universal Turing machine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
