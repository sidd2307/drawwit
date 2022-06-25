import React, { useRef } from "react";
import RectangleDiv from "./RectangleDiv";
import { Button } from "react-bootstrap";
import exportAsImage from "../utils/exportAsImage";
import CircleDiv from "./CircleDiv";
import SquareDiv from "./SquareDiv";

export default function Body() {
  const left = window.innerWidth;
  const myHeight = window.innerHeight;
  const exportRef = useRef();

  return (
    <div style={{ display: "flex", flexDirection: "row" }} ref={exportRef}>
      <div
        className=""
        style={{
          flex: 1,
          backgroundColor: "#CFE2FF",
          flexDirection: "column",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <RectangleDiv yloc={5} width={(left * 1) / 5} />
        <CircleDiv yloc={215} width={(left * 1) / 8} xloc={40} />
        <SquareDiv yloc={420} width={(left * 1) / 9} xloc={60} />
      </div>
      <div
        className=""
        style={{ flex: 4, backgroundColor: "#CFE2FF", height: myHeight * 0.9 }}
        id="the_canvas_element_id"
      >
        Drawing Area
        <Button
          style={{ position: "absolute", top: 600, left: 400 }}
          variant="outline-success"
          onClick={() => window.location.reload(false)}
        >
          Reset
        </Button>
        <Button
          style={{ position: "absolute", top: 600, left: 1400 }}
          variant="outline-primary"
          onClick={() => exportAsImage(exportRef.current, "test")}
        >
          Download
        </Button>
      </div>
    </div>
  );
}
