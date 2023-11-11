import Tooltip from "./Tooltip.component";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

      <h1>Import Tooltip Component</h1>
      <p>Import tooltip component to render tooltip. Tooltip component will require to pass text, position and chidren component</p>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  import Tooltip from "./ToolTip/Tooltip.component";

  function RenderToolTip() {
    return (
      <Tooltip text={tooltipContent} position="top">
        <div>Tooltip render on top</div>
      </Tooltip>
    )
  }
  `
  }
      </SyntaxHighlighter>

      <h1>Tooltip Component</h1>

      <SyntaxHighlighter language="javascript" style={materialOceanic}>
  {`
  const Tooltip = ({ children, text, position }) => {
    position = position.toString()?.toLowerCase();
    const toolTipPosition = getPositionClassName(position);
    return (
      <span className={tooltipContainer}>
        {children}
        <span className={toolTipText position}>{text}</span>
      </span>
    );
  }

  export default Tooltip;`
  }
      </SyntaxHighlighter>
      
      <h1>Add styling for tooltip</h1>

      <SyntaxHighlighter language="css" style={materialOceanic}>
  {`
  .tooltipContainer {
    position: relative;
  
    .toolTipText {
      visibility: hidden;
      width: 180px;
      position: absolute;
      background-color: #555;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1;
  
      &::after {
        content: "";
        position: absolute;
        border-width: 7px;
        border-style: solid;
      }
    }
  
    &:hover .toolTipText{
      visibility: visible;
      opacity: 1;
    }
  
    .toolTipText.top {
      bottom: 130%;
  
      &::after {
        top: 100%;
        border-color: #555 transparent transparent transparent;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  
    .toolTipText.bottom {
      top: 130%;
          
      &::after {
        bottom: 100%;
        top: auto;
        border-color: transparent transparent #555 transparent;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    
    .toolTipText.left {
      right: 100%;
      transform: translate(-5%, -50%);
      top: 50%;
  
      &::after {
        left: 100%;
        border-color: transparent transparent transparent #555;
        top: 50%;
        transform: translate(0%, -50%);
      }
    }
    
    .toolTipText.right {
      left: 100%;
      transform: translate(5%, -50%);
      top: 50%;
  
      &::after {
        right: 100%;
        border-color: transparent #555 transparent transparent ;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  `
  }
      </SyntaxHighlighter>
    </>
  )
}

export default ToolTipRenderComponent;