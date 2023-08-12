import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const addColumn = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnform} onSubmit={addColumn}>
      <label className={styles.paramtitle}>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label className={styles.paramtitle}>Icon:</label> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;