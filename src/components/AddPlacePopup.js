import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 
    onAddPlace({
      name,
      link
    });
  }

  return(
    <PopupWithForm 
      name="place"
      title="Новое место"
      submitText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input 
        id="place-name" 
        className="popup__input popup__input_place_name" 
        name="name" 
        placeholder="Название" 
        minLength="2" 
        maxLength="40" 
        required 
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />
      <span className="place-name-error popup__error"/>
      <input 
        id="place-link" 
        className="popup__input popup__input_place_link" 
        type ='url' 
        name="link" 
        placeholder="Ссылка на картинку" 
        required
        value={link}
        onChange={(e) => {setLink(e.target.value)}}
      />
      <span className="place-link-error popup__error"/>
    </PopupWithForm>
  
  )

}

export default AddPlacePopup;
