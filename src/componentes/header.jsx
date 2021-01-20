import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <div className={styles.header}>
        <p className={styles.title}>TO DO LIST</p>
    </div>
);

export default Header;