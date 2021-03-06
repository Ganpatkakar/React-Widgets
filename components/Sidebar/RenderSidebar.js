import Link from "next/link";
import styles from './sidebar.module.scss';

export default function RenderSidebarList ({sideNav}) {
  return (
    <>
      {
        sideNav.map(({link, name}) => (
          <li key={name} className={styles.sidebarListItem}>
            <Link href={link} as={ process.env.BACKEND_URL + `${link}`}>{name}</Link>
          </li>
        ))
      }
    </>
  )
}