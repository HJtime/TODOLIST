import React from 'react';
import styles from './list_item.module.css';

const ListItem = ({onClear, onDelete, item}) => {
    const onSubmit=()=>{
        onDelete(item);
    }

    const onClick=()=>{
        onClear(item);
    }

    const itemMode=item.mode==='clear'?styles.clear:styles.nope;

    return(
    <li className={styles.item}>
        <span className={`${styles.desc} ${itemMode}`}>{item.content}</span>
        <div className={styles.btnbox}>
            <button className={styles.check} onClick={onClick}><i className="fas fa-check"></i></button>
            <button className={styles.delete} onClick={onSubmit}><i className="fas fa-times"></i></button>
        </div>
    </li>
    );
};

export default ListItem;