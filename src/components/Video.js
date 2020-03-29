import React from "react";
import ArrowSvg from "./helper/arrow_svg";

function Video(props) {
  return (
    <div className="video" ref={props.myRef}>
      <div className="arrow_scroll" data-text="scroll">
        <ArrowSvg size="4vw" icon="arrow-forward" />
        <ArrowSvg size="4vw" icon="arrow-forward" />
        <ArrowSvg size="4vw" icon="arrow-forward" />
      </div>
    </div>
  );
}

export default Video;