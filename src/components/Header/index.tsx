import { useEffect, useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const url = "/computer-science.png";

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(window.scrollY);
      windowHeight >= window.screen.availHeight / 2 - 350
        ? setSticky(true)
        : setSticky(false);
    }
  };

  return (
    <div className={styles["header-wrapper"]}>
      <nav
        className={`${styles["header-nav"]} ${
          isSticky ? styles["header-sticked"] : ""
        }`}
      >
        <h4 hidden={isSticky}>Welcome to my page</h4>
        <h1>Davide Volpe</h1>
      </nav>
    </div>
  );
};
export default Header;
