import { useState } from "react";
import { Rnd } from "react-rnd";

function CircleDiv(props) {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    borderRadius: props.width / 2,
  };
  const [width, setwidth] = useState(props.width);
  const [height, setheight] = useState(props.width);
  const [x, setx] = useState(props.xloc);
  const [y, sety] = useState(props.yloc);
  const [recttext, setrecttext] = useState("circle");
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

export default CircleDiv;
