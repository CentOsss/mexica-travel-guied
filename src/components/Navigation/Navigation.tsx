import React, { useState } from 'react';
import styles from './Navigation.module.css';
import Link from '@docusaurus/Link';

interface NavItem {
  label: string;
  to: string;
  items?: NavItem[];
}

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.mobileHeader}>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.isOpen : ''}`}>
        {items.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <Link to={item.to} className={styles.navLink}>
              {item.label}
            </Link>
            {item.items && (
              <ul className={styles.dropdown}>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.dropdownItem}>
                    <Link to={subItem.to} className={styles.dropdownLink}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

