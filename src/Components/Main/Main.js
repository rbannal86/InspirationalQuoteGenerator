import { useState } from 'react';
import {
  pluralNoun,
  noun,
  article,
  templates,
  verb,
  adjective,
} from '../../Logic/templates';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Text from '../Text/Text';
import Menu from '../Menu/Menu';

import './Main.css';

export default function Main() {
  const [width] = useState(Math.max(Math.floor(window.innerWidth * 0.4), 300));
  const [text, setText] = useState(null);
  const [currentSelection, setCurrentSelection] = useState(null);

  function changeSelection(value) {
    setCurrentSelection(value);
    let template = templates[value];
    let templateArr = template.split(' ');
    templateArr.forEach((word, index) => {
      if (word[0] === '1') {
        let extra = '';
        if (word.length > 1) extra = word[1];
        templateArr[index] = noun() + extra;
      }
      if (word[0] === '2') {
        let extra = '';
        if (word.length > 1) extra = word[1];
        templateArr[index] = noun() + extra;
        templateArr[index] = pluralNoun() + extra;
      }
      if (word[0] === '3') {
        let nextWord = noun();
        let extra = '';
        if (templateArr[index + 1].length > 1)
          extra = templateArr[index + 1][1];
        templateArr[index + 1] = nextWord + extra;
        templateArr[index] = article(nextWord);
      }
      if (word[0] === '4') {
        let newWord = verb();
        if (
          index === 0 ||
          templateArr[index - 1][templateArr[index - 1].length - 1] === '.'
        )
          newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        let extra = '';
        if (word.length > 1) extra = word[1];
        templateArr[index] = newWord + extra;
      }
      if (word[0] === '5') {
        let extra = '';
        if (word.length > 1) extra = word[1];
        templateArr[index] = adjective() + extra;
      }
    });

    template = templateArr.join(' ');

    setText(template);
  }

  return (
    <div className="main-main">
      <Header />
      <div className="main-content">
        <div
          style={{
            position: 'relative',
            width: `${width}px`,
          }}
          id={'image-container'}
        >
          <Image width={width} />
          <Text width={width} text={text} />
        </div>
        <Menu
          changeSelection={changeSelection}
          width={width}
          currentSelection={currentSelection}
        />
      </div>
    </div>
  );
}
