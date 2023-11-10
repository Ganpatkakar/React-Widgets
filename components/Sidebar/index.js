import RenderSidebarList from "./RenderSidebar";
import styles from './sidebar.module.scss'

const Sidebar = () => {
  const sideNav = [
    { link: "/home/tooltip", name: "Tooltip" },
    {link: "/home/carousel", name: "Carousel"},
    { link: "/home/datatable", name: "DataTable" },
    { link: "/home/editor", name: "Wysiwgy Editor" },
    { link: "/home/calendar", name: "Calendar" },
    { link: "/home/typeahead", name: "Typeahead" },
    { link: "/home/poll", name: "Poll widget" },
    { link: "/home/tictactoe", name: "Tic Tac Toe" },
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
