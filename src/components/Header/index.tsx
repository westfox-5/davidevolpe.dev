import { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const darkModeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      document.body.classList.toggle('dark-mode-variables');
      darkModeRef.current?.querySelector('span:nth-child(1)')?.classList.toggle('active');
      darkModeRef.current?.querySelector('span:nth-child(2)')?.classList.toggle('active');
    };

    const element = darkModeRef.current;
    if (element != null) {
      element?.addEventListener('click', handleClick);
      return () => {
        element?.removeEventListener('click', handleClick);
      };
    }

  }, []);


  return (
    <div>
      <nav className="nav-wrapper">
        <ul className="nav-links">
          <li className="nav-link"><a href="#">Davide Volpe</a></li>
        </ul>

        <div className="right-section">
          <div className="dark-mode" ref={darkModeRef}>
            <span className="material-symbols-outlined active">light_mode</span>
            <span className="material-symbols-outlined">dark_mode</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
