import { useState } from 'react';

import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleNoClick = () => {
    alert('Questo bottone non fa nulla di utile!');
  };
  return (
    <>
      <div>
        <h1>Primo esercizio React</h1>
      </div>
      <div>
        <ButtonComponent content='Clicca qui' onClick={handleClick} />
        <ButtonComponent content='Qui invece no' onClick={handleNoClick} />
        <p>Conteggio di click sul bottone: {count}</p>
      </div>
      <div>
        <ImageComponent
          src='https://cdn.pixabay.com/photo/2024/05/26/15/27/kid-8788962_1280.jpg'
          alt='Immagine da Pixabay'
        />
      </div>
    </>
  );
}

export default App;
