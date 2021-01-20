import React, { useRef } from 'react';
import styles from './addform.module.css';

const AddForm = ({onAdd}) => {
    const formRef=useRef();
    const inputRef=useRef();

    const handleAdd=()=>{
        const items={
            id: Date.now(),
            content: inputRef.current.value,
            mode: 'nope'
        }
        if(items.content===""){
            return;
        }

        onAdd(items);
        formRef.current.reset();
    }

    const onClick=(event)=>{
        event.preventDefault();
        handleAdd();
    }

    return(
        <form ref={formRef} className={styles.form}>
            <input className={styles.input} ref={inputRef} type="text"/>
            <button className={styles.button} onClick={onClick}><i className="fas fa-plus"></i></button>
        </form>
    );
};

export default AddForm;