import React, { useState, useEffect } from 'react';

function Banner () {
  const words = ['eventos', 'bares', 'restaurantes']; 
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setTyping(!typing);

      if (typing) {
        if (index === words.length - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer); 
  }, [index, typing]);

return (
  <div className='banner'>
    <div className='container'></div>
    <h1>Encontre os melhores
      <p>{words[index].split('').map((letter, i) => (
        <span key={i}>
          {letter}
        </span>
      ))}
        </p>para você</h1>
    <button type='button'>Bora sextar?</button>
  </div>
)};

export default Banner;