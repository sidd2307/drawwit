import { useState } from "react";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
};

function RectangleDiv(props) {
  const [width, setwidth] = useState(props.width);
  const [height, setheight] = useState(200);
  const [x, setx] = useState(0);
  const [y, sety] = useState(props.yloc);
  const [recttext, setrecttext] = useState("rectangle");
  return (
    <div className="App">
      <Rnd
        style={style}
        size={{ width: width, height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => {
          setx(d.x);
          sety(d.y);
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setheight(ref.style.height);
          setwidth(ref.style.width);
        }}
      >
        <input
          type="text"
          value={recttext}
          onChange={(e) => setrecttext(e.target.value)}
          style={{
            border: "0px",
            backgroundColor: style.background,
            width: width,
          }}
        />
      </Rnd>
    </div>
  );
}

export default RectangleDiv;
