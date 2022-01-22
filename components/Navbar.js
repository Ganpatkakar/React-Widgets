import Link from "next/link";
import styles from './Navbar.module.scss';
import { useRouter } from "next/router";


const Navbar = ({ list }) => {
  const router = useRouter();

  return (
    <div className={styles.topnav}>
      {list.map((item) => (
        <li key={item.name} className={`${styles.navItem} ${router.pathname == item.link ? styles.active : "" }`}>
          <Link href={item.link} >
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Navbar;
