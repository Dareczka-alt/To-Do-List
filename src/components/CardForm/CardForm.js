import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const action = (e) => {
    e.preventDefault();
    props.addCard({ title: title }, props.columnId);
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