import {
  pluralNoun,
  noun,
  article,
  templates,
  verb,
  adjective,
} from './templates';

function handlePunctuation(word) {
  if (word.length > 1) return word[1];
  else return '';
}

function handleCapitalize(word, index, template) {
  if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
  else if (template[index - 1].endsWith('.'))
    return word.charAt(0).toUpperCase() + word.slice(1);
  else return word;
}

function fillTemplate(setText, setCurrentSelection, value) {
  setCurrentSelection(value);
  let templateArr = templates[value].split(' ');
  templateArr.forEach((word, index) => {
    let extra;
    // 1 is noun
    // 2 is plural noun
    // 3 is 'a' or 'an'
    // 4 is verb
    // 5 is adjective
    switch (word[0]) {
      case '1':
        extra = handlePunctuation(word);
        templateArr[index] = handleCapitalize(
          noun() + extra,
          index,
          templateArr
        );
        break;
      case '2':
        extra = handlePunctuation(word);
        templateArr[index] = handleCapitalize(
          pluralNoun() + extra,
          index,
          templateArr
        );
        break;
      case '3':
        let nextWord = noun();
        extra = handlePunctuation(templateArr[index + 1]);
        templateArr[index + 1] = handleCapitalize(
          nextWord + extra,
          index,
          templateArr
        );
        templateArr[index] = handleCapitalize(
          article(nextWord),
          index,
          templateArr
        );
        break;
      case '4':
        extra = handlePunctuation(templateArr[index]);
        templateArr[index] = handleCapitalize(
          verb() + extra,
          index,
          templateArr
        );
        break;
      case '5':
        extra = handlePunctuation(templateArr[index]);
        templateArr[index] = handleCapitalize(
          adjective() + extra,
          index,
          templateArr
        );
        break;
      default:
        break;
    }

    setText(templateArr.join(' '));
  });
}

export { fillTemplate };
