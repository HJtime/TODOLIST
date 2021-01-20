import { useState } from 'react';
import styles from './app.module.css';
import AddForm from './componentes/addform';
import Header from './componentes/header';
import ListItems from './componentes/list_items';

function App() {
  const [items, setItems]=useState([
    {
      id: '1',
      content: '리액트 공부하기',
      mode: 'nope'
    },
    {
      id: '2',
      content: '우유 사기',
      mode: 'nope'
    }
  ])

  const onAdd=(content)=>{
    const updated=[...items, content];
    setItems(updated);
  }

  const onDelete=(content)=>{
    const updated=items.filter(item=>item.id!==content.id);
    setItems(updated);
  }

  const onClearItem=(content)=>{
    if(content.mode==='nope'){
      const clear=items.map(
        item=>item.id===content.id?
        {...item, mode: 'clear'}:item)
      setItems(clear);
    }else if(content.mode==='clear'){
      const clear=items.map(
        item=>item.id===content.id?
        {...item, mode: 'nope'}:item)
      setItems(clear);
  }
}

  return (
    <section className={styles.app}>
      <div className={styles.container}>
        <Header/>
        <ListItems onDelete={onDelete} onClearItem={onClearItem} items={items}/>
        <AddForm onAdd={onAdd}/>
      </div>
    </section>
  );
}

export default App;
