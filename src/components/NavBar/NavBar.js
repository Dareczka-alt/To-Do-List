import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/"><span className="fa fa-bars"></span></a>
      <span className={styles.navtxt}><a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/favourite">Favourite</a>
      </span>
    </nav>
  );
}
export default NavBar;