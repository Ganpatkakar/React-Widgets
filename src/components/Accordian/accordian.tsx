import React, {
  useState,
  Children,
  ReactElement,
  JSXElementConstructor,
} from "react";
import styles from "./accordian.style.scss";

interface IAccordian {
  selected?: string | number;
  children: ReactElement<any, string | JSXElementConstructor<any>>[];
}

export function Accordian(props: IAccordian) {
  const { selected = "", children } = props;
  const [selectedAccordian, setSelectedAccordian] = useState(selected);

  const handleAccordianClick = (event: any, data: any) => {
    setSelectedAccordian(data);
  };

  return (
    <div className={styles.accordianContainer}>
      {Children.map(children, (accordianItem) => {
        return React.cloneElement(accordianItem, {
          selected: selectedAccordian,
          onClick: handleAccordianClick,
        });
      })}
    </div>
  );
}
