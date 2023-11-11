import Button from "../Button";
import styles from "./ModelPopover.module.scss";

export default function ModelPopover(props) {
  const { show, handleClose, children, showFooter = true } = props;

  return (
    <div className={`${styles.popeverContainer} ${show ? styles.show : styles.hide}`}>
      <div className={styles.container}>
          <div className={styles.bodySection}>{children}</div>
          {
            showFooter && (
              <div className={styles.footerSection}>
                <Button text="close" handleClick={handleClose}/>
              </div>
            )
          }
      </div>
    </div>
  );
}
