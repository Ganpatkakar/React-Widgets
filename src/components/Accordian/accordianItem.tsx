import React, {
  Children,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";

interface IAccordianItem {
  value: string | number;
  children: ReactElement<any, string | JSXElementConstructor<any>>[];
  onClick?: (event: any, value: string | number) => void;
  selected?: string | number;
}

export function AccordianItem(props: IAccordianItem) {
  const { value, children, selected, onClick: handleOnclick } = props;
  const isActive = value === selected;

  return (
    <div onClick={(event) => handleOnclick(event, value)}>
      {Children.map(children, (childElement) => {
        return React.cloneElement(childElement, {
          isActive,
        });
      })}
    </div>
  );
}
