import { useState } from 'react';

import * as htmlToImage from 'html-to-image';
import { templates } from '../../Logic/templates';

import RefreshIcon from '@material-ui/icons/Refresh';

import './Menu.css';

export default function Menu({ changeSelection, width, currentSelection }) {
  const [pageNum, setPageNum] = useState(0);

  function handleNav(num) {
    setPageNum(pageNum + num);
  }

  function saveImage(e) {
    e.preventDefault();
    htmlToImage
      .toPng(document.getElementById('image-container'), {
        quality: 1,
        width: Math.max(600, width),
        height: Math.max(600, width),
        pixelRatio: width / Math.max(width, 600),
      })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'inspirational-quote-generator.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  function renderButtons() {
    let pageSelection = templates.slice(pageNum * 15, (pageNum + 1) * 15);

    return pageSelection.map((template, index) => {
      let className = 'menu-selection';
      let mainIndex = templates.indexOf(template);
      if (currentSelection === mainIndex) className = className + ' active';
      return (
        <li key={index + 'li'}>
          <button
            onClick={() => changeSelection(mainIndex)}
            className={className}
            key={template[0] + template[1]}
          >
            {currentSelection === mainIndex ? (
              <RefreshIcon fontSize={'small'} />
            ) : (
              mainIndex + 1
            )}
          </button>
        </li>
      );
    });
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
      className="menu-main"
    >
      <h2 className="menu-title">SELECT TEXT TEMPLATE</h2>
      <ul key={pageNum}>{renderButtons()}</ul>
      <div className="menu-nav-div">
        <button
          onClick={() => handleNav(-1)}
          disabled={pageNum === 0}
          className="menu-nav-button"
        >
          {'<'}
        </button>
        <button
          onClick={() => handleNav(1)}
          disabled={(pageNum + 1) * 15 + 1 > templates.length}
          className="menu-nav-button"
        >
          {'>'}
        </button>
      </div>

      <button className="menu-save" onClick={(e) => saveImage(e)}>
        Save Image
      </button>
    </div>
  );
}
