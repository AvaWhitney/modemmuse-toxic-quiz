import React, { useState } from "react";
import "./HamburgerMenu.css"; // or use Tailwind if that’s your vibe

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="hamburger-wrapper">
      <button className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </button>

      {isOpen && (
        <nav className="mobile-menu">
          <ul>            
            <li><a href="https://modemmuse.com">HQ</a></li>
            <li><a href="https://kitta.modemmuse.com">Kitta</a></li>
            <li><a href="https://horoscope.modemmuse.com">Horoscopes</a></li>
            <li><a href="https://modemmuse.com/quizzes">Quizzes</a></li>
            <li><a href="https://modemmuse.com/muselabs">Muse Labs</a></li>
            <li><a href="https://modemmuse.com/contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
