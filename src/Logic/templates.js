import { nouns } from './words';
import pluralize from 'pluralize';
import whimsy from 'whimsy';

function pluralNoun() {
  return pluralize.plural(nouns[Math.floor(Math.random() * nouns.length)]);
}

function noun() {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

function article(noun) {
  if (
    noun.startsWith('a') ||
    noun.startsWith('e') ||
    noun.startsWith('i') ||
    noun.startsWith('o') ||
    noun.startsWith('u')
  )
    return 'an';
  else return 'a';
}

function verb() {
  return whimsy('{{ verb }}');
}

function adjective() {
  return whimsy(`{{adjective}}`);
}

const templates = [
  'You have to look through the 1 to see the 1.',
  "4 like no one is 5. 4 like you've never been 5. 4 like nobody is 5.",
  "4 for the 1. Even if you 4, you'll 4 among the 2.",
  `If life gives you 3 1, make 2.`,
  'Be the 1 you want to see in the 1.',
  'The 1 sees 3 1 in every 1. The 1 sees 3 1 in every 1.',
  '4, 4, 4.',
  'You have to 4 a lot of 2 before you find your 2.',
  "Yesterday's the 1, tomorrow's the 1, but today is 3 1. That's why it's called the 1.",
  'I would rather die of 1 than of 1.',
  'The people who are 5 enough to think they can 4 the 1 are the ones who do.',
  'You may encounter many 2, but you must not be 5.',
  'Imagine your 1 is 5 in every respect; what would it 4 like?',
  'We generate 2 while we 4. We overcome them by 1.',
  '1 is 1 having 1.',
];

export { templates, pluralNoun, noun, article, verb, adjective };
