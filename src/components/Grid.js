import "../CSS/grid.css";
import Cell from "./Cell.js";
import { useState, useEffect } from "react";

import Bfs from '../Algorithms/bfs.js'

export default function Grid(props) {
  var visited = new Set();

  const [mouseState, setMouseState] = useState(false);

  var x = window.innerHeight;
  x = x - 130; //to adjust for the menubar height
  var noOfRows = Math.trunc(x / 28);

  var y = window.innerWidth;
  var noOfColumns = Math.trunc(y / 28);

  var grid = [];
  var rows = [];

  const [startPos, setStartPos] = useState([Math.trunc(noOfRows / 2),Math.trunc(noOfColumns / 3),]);
  const [endPos, setEndPos] = useState([Math.trunc(noOfRows / 2), Math.trunc((2 * noOfColumns) / 3),]);
  const [shiftStart, setShiftStart] = useState(false);
  const [shiftEnd, setShiftEnd] = useState(false);

  const [wallArr, setWallArr] = useState([]);

  const [answer, setAnswer] = useState([]);
  const [visit, setVisit] = useState(new Set());

 
  useEffect(() => {
    //this triggers when we click visualise or shift start/end node
    if (props.flag === true) {
      setAnswer(Bfs(grid, startPos, endPos, visited, wallArr));
      setVisit(visited);
    }
    props.sf(false);
  }, [props.flag, startPos, endPos]);

  useEffect(() => {
    //this triggers when we click the reset button
    if (props.rf === true) {
      setWallArr([]);
      setAnswer([]);
      setVisit(new Set());
      setStartPos([Math.trunc(noOfRows / 2), Math.trunc(noOfColumns / 3)]);
      setEndPos([Math.trunc(noOfRows / 2), Math.trunc((2 * noOfColumns) / 3)]);
    }
    props.srf(false);
  }, [props.rf]);

  useEffect(() => {
    //this triggers when we click the clear Path button
    if (props.cpf === true) {
      setAnswer([]);
      setVisit(new Set());
    }
    props.srf(false);
  }, [props.cpf]);


  for (var j = 0; j < noOfRows; j++) {
    for (var i = 0; i < noOfColumns; i++) {
      {
        rows.push(
          <Cell
            pos={[j, i]}
            start={[startPos, setStartPos]}
            shifter={[shiftStart, setShiftStart]}
            end={[endPos, setEndPos]}
            endShifter={[shiftEnd, setShiftEnd]}
            temp={[mouseState, setMouseState]}
            answer={answer}
            wallArray={[wallArr, setWallArr]}
            visit={visit}
            sf={props.sf}
            rf={props.rf}
            virgin={props.v}
          />
        );
      }
    }
    grid.push(rows);
    rows = [];
  }

  return (
    <div class="grid-container">
      <ul class="grid">{grid}</ul>
    </div>
  );
}
