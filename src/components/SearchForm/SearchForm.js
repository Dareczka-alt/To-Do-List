import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    dispatch(updateSearchString(searchString));
  }, [dispatch, searchString]);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));

  }


  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchString} onChange={(e) => setSearchString(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};
export default SearchForm;