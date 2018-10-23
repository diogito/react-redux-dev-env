import React from 'react';
import styles from './Header.modules.css';

class Header extends React.Component {
  render() {
    return (
      <header className={[styles.header, 'mb-auto'].join(' ')}>
      </header>
    )
  }
}

export default Header;
