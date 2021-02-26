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
        <li>
          <button
            onClick={() => changeSelection(index)}
            className={className}
            key={template[0] + template[1]}
          >
            {currentSelection === index ? (
              <RefreshIcon fontSize={'.5rem'} />
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
      <ul>
        {renderButtons()}
        {/* <li>
          <button
            className="menu-selection"
            onClick={() => changeSelection(0)}
          >
            1
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(1)}>
            2
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(2)}>
            3
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(3)}>
            4
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(4)}>
            5
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(5)}>
            6
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(6)}>
            7
          </button>
        </li>
        <li>
          <button className="menu-selection" onClick={() => changeSelection(7)}>
            8
          </button>
        </li> */}
      </ul>
      <button className="menu-save" onClick={(e) => saveImage(e)}>
        Save Image
      </button>
    </div>
  );
}
