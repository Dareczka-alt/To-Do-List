import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';


const CardForm = (props) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const action = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { id: shortid(), title: title, columnId: props.columnId } });
    setTitle('');

  };

  return (
    <form className={styles.cardForm} onSubmit={action}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add Card </Button>
    </form>
  );
};

export default CardForm;