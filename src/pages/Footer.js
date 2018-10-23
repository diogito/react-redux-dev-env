import React from 'react';
import styles from './Footer.modules.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={[styles.footer, 'mt-auto'].join(' ')}>
        <div className="inner">
          <p>React Redux Development Environment by <a href="http://twitter.com/diogenessazo">@diogito</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer;
