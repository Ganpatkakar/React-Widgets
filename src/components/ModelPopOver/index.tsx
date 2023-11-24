import React from "react";
import { Button } from "../Button";
import "./modelPopover.css";

interface IModelPopover {
  show: boolean;
  handleClose?: () => void;
  handleApply?: () => void;
  children: React.ReactNode;
  showFooter?: boolean;
  showApply?: boolean;
}

export const ModelPopover = (props: IModelPopover) => {
  const {
    show,
    handleClose,
    handleApply,
    children,
    showFooter = true,
    showApply = false,
  } = props;

  return (
    <div className={`popeverContainer ${show ? "show" : "hide"}`}>
      <div className={"container"}>
        <div>{children}</div>
        {showFooter && (
          <div className={"footerSection"}>
            {showApply && <Button label="Apply" onClick={handleApply} />}
            <Button label="close" onClick={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
};
