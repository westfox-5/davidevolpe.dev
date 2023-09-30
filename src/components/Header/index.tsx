import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={classes.nav_wrapper}>
        <ul className={classes.nav_links}>
          <li className={classes.nav_link}><a href="#">Davide Volpe</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
