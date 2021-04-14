import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card'


function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getMyInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);

        return api.getCards();
      })
      .then((res) => {
        setCards(res);
      });
  }, []);


  return (
    <main className="main">
    <section className="profile">
    <button className="profile__avatar-edit" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}>
    </button>
    <div className="profile__info">
      <div className="profile__name-container">
       <h1 className="profile__name">{userName}</h1>
       <button className="profile__edit-button button" type="button" onClick={props.onEditProfile}></button>
      </div>
      <p className="profile__about">{userDescription}</p>
    </div>
    <button className="profile__add-button button" type="button" onClick={props.onAddPlace}></button>
    </section>
    <section className="places">
    {cards.map((card) => (
     <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
    ))}
    </section>
  </main>
  )
}

export default Main