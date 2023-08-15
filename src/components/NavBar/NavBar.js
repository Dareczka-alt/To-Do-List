import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><span className="fa fa-bars"></span></Link>
      <span className={styles.navtxt}>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navtxt}
          to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navtxt}
          to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navtxt}
          to="/favourite">Favourite</NavLink>
      </span>
    </nav>
  );
}
export default NavBar;