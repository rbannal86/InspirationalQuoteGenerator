import { useState } from 'react';
import { fillTemplate } from '../../Logic/generator';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './Main.css';

export default function Main() {
  const [width] = useState(Math.max(Math.floor(window.innerWidth * 0.4), 300));
  const [text, setText] = useState(null);
  const [currentSelection, setCurrentSelection] = useState(null);
  const [random, setRandom] = useState(false);

  function changeSelection(value) {
    fillTemplate(setText, setCurrentSelection, value);
  }

  function randomize(num) {
    changeSelection(num);
    setRandom(!random);
  }

  return (
    <div className="main-main">
      <Header />
      <h3 className="main-title">CLICK PICTURE TO CHANGE IMAGE</h3>
      <div className="main-content">
        <div
          style={{
            position: 'relative',
            width: `${width}px`,
          }}
          id={'image-container'}
        >
          <Image width={width} random={random} />
          <Text width={width} text={text} />
        </div>
        <Menu
          changeSelection={changeSelection}
          width={width}
          currentSelection={currentSelection}
          randomize={randomize}
        />
      </div>
      <Footer />
    </div>
  );
}
