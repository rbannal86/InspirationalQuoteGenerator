import * as htmlToImage from 'html-to-image';
import { templates } from '../../Logic/templates';

import RefreshIcon from '@material-ui/icons/Refresh';

import './Menu.css';

export default function Menu({ changeSelection, width, currentSelection }) {
  function saveImage(e) {
    e.preventDefault();
    htmlToImage
      .toJpeg(document.getElementById('image-container'), {
        quality: 1,
        width: 600,
        height: 600,
        pixelRatio: width / Math.max(width, 600),
      })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'inspirational-quote-generator.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  function renderButtons() {
    return templates.map((template, index) => {
      let className = 'menu-selection';
      if (currentSelection === index) className = className + ' active';
      return (
        <li key={index + 'li'}>
          <button
            onClick={() => changeSelection(index)}
            className={className}
            key={template[0] + template[1]}
          >
            {currentSelection === index ? (
              <RefreshIcon fontSize={'small'} />
            ) : (
              index + 1
            )}
          </button>
        </li>
      );
    });
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}
      className="menu-main"
    >
      <ul>{renderButtons()}</ul>
      <button className="menu-save" onClick={(e) => saveImage(e)}>
        Save Image
      </button>
    </div>
  );
}
