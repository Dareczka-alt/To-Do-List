import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectros
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getCardById = ({ cards }, cardId) => cards.filter(card => card.id === cardId)[0];
export const getFavouriteCard = (state) =>
  state.cards.filter((card) => card.isFavourite === true);

//action creators
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const toggleClass = payload => ({ type: 'TOGGLE_CARD_FAVOURITE', payload });


const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [...statePart, { ...action.payload, id: shortid() }];
    case 'TOGGLE_CARD_FAVOURITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavourite: !card.isFavourite } : card);
    default:
      return statePart;
  }
}

export default cardsReducer;