import React from 'react';
import { Button } from "../Button";
import "./modelPopover.css";

interface IModelPopover {
  show: boolean;
  handleClose?: () => void;
  children: React.ReactNode;
  showFooter?: boolean;
}

export const ModelPopover = (props: IModelPopover) => {
  const { show, handleClose, children, showFooter = true } = props;

  return (
    <div className={`popeverContainer ${show ? "show" : "hide"}`}>
      <div className={"container"}>
          <div>{children}</div>
          {
            showFooter && (
              <div className={"footerSection"}>
                <Button label="close" onClick={handleClose}/>
              </div>
            )
          }
      </div>
    </div>
  );
}
