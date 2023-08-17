import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import { useState } from 'react';



const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listform} onSubmit={handleSubmit}>
      <label className={styles.paramtitle}>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label className={styles.paramtitle}>Description:</label> <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;