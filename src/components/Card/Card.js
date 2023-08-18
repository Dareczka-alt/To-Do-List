import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleClass, getCardById } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';


const Card = props => {
  const card = useSelector(state => getCardById(state, props.id));

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleClass(props.id));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button onClick={toggle} className={styles.star}>
          <i className={clsx(card.isFavourite && styles.favourite, 'fa fa-star')}></i>
        </button>

      </div>
    </li>
  );
};

export default Card;
