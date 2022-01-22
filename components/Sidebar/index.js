import RenderSidebarList from "./RenderSidebar";
import styles from './sidebar.module.scss'

const Sidebar = () => {
  const sideNav = [
    { link: "/home/tooltip", name: "Tooltip" },
    {link: "/home/carousel", name: "Carousel"},
    { link: "/home/datatable", name: "DataTable" }
  ];
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.sidebarList}>
        <RenderSidebarList sideNav={sideNav} />
      </ul>
    </div>
  );
};

export default Sidebar;
