import PageTitle from './../PageTitle/PageTitle';
import styles from './Favourite.module.scss'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavouriteCard } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(getFavouriteCard);
  if (!cards.length)
    return (
      <div className={styles.no_favorite_cards}>
        You don't have favorite cards
      </div>
    );
  return (
    <div className={styles.favourite}>
      <PageTitle>Favourite</PageTitle>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavourite={card.isFavourite}
            id={card.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;