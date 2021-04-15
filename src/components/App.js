import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    console.log(selectedCard)
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }


  return (
  <div className="container">
    <div className ="page">
    <Header />
    <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
    />
    <Footer />
    <PopupWithForm 
      name="profile"
      title="Редактировать профиль"
      submitText="Сохранить"
      isOpen={isEditProfileOpen}
      onClose={closeAllPopups}
    >
      <input id="profile-name" className="popup__input popup__input_profile_name" name="popupProfileName" minLength="2" maxLength="40" required/>
      <span className="profile-name-error popup__error"/>
      <input id="profile-about" className="popup__input popup__input_profile_about" name="popupProfileAbout" minLength="2" maxLength="200" required/>
      <span className="profile-about-error popup__error"/>
    </PopupWithForm>
    <PopupWithForm 
      name="place"
      title="Новое место"
      submitText="Сохранить"
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    >
      <input id="place-name" className="popup__input popup__input_place_name" name="popupPlaceName" placeholder="Название" minLength="2" maxLength="40" required/>
      <span className="place-name-error popup__error"/>
      <input id="place-link" className="popup__input popup__input_place_link" type ='url' name="popupPlaceLink" placeholder="Ссылка на картинку" required/>
      <span className="place-link-error popup__error"/>
    </PopupWithForm>
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      submitText="Сохранить"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    >
      <input id ='profile-avatar' className="popup__input popup__input_profile_avatar"  name="popupInputAvatarPhoto" type="url" placeholder="Ссылка на картинку" required/>
      <span id="profile-avatar-error" className="popup__error"/>
    </PopupWithForm>
    <PopupWithForm
      name="delete-confirm"
      title="Вы уверены?"
      submitText="Да"
      onClose={closeAllPopups}
    >
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </div>
</div>
  );
}

export default App;
