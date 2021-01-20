import React from 'react';
import ListItem from './list_item';
import styles from './list_items.module.css';

const ListItems = ({onClearItem, onDelete, items}) => {
    const onSubmit=(item)=>{
        onDelete(item);
    }

    const onClick=(item)=>{
        onClearItem(item);
    }

    return(
    <ul className={styles.list}>
        {items.map(item=>(<ListItem onClear={onClick} onDelete={onSubmit} key={item.id} item={item}/>))}
    </ul>
    );
};

export default ListItems;