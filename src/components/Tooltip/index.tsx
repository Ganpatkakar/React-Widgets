import React from "react";
import Tooltip from "./Tooltip";

const ToolTipRenderComponent = () => {
  const tooltipContent = "Lorum ipsum Lorum ipsum Lorum ipsum content";
  return (
    <>
      {/* Tooltip render on top */}
      <Tooltip text={tooltipContent} position="top">
        <div>Tooltip render on top</div>
      </Tooltip>

      {/* Tooltip render on left */}
      <Tooltip text={tooltipContent} position="left">
        <div>Tooltip render on left</div>
      </Tooltip>

      {/* Tooltip render on right */}
      <Tooltip text={tooltipContent} position="right">
        <div>Tooltip render on right</div>
      </Tooltip>

      {/* Tooltip render on bottom */}
      <Tooltip text={tooltipContent} position="bottom">
        <div>Tooltip render on bottom</div>
      </Tooltip>
    </>
  );
};

export default ToolTipRenderComponent;
