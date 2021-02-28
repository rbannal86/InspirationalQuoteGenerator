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
  "When you have 3 1, you've got to 4 it and never 4.",
  "I can't change the 1 of the 1, but I can 4 my 2 to always reach my 1.",
  "No matter what you're going through, there's 3 1 at the end of the 1.",
  "Try to be 3 1 in someone else's 1.",
  'Sometimes you will never know the 1 of 3 1, until it becomes 3 1.',
  'The most wasted of 2 is one without 1.',
  'You 4 what you 4.',
  '1 changes very quickly, in a very 5 way, if you let it.',
  "You don't always need 3 1. Sometimes you just need to 4, 4, 4, and see what happens.",
  'My 1 in life is not merely to 4, but to 4.',
  "Start by doing what's 5; then do what's 5; and suddenly you are doing the 5.",
  "Don't 4 each 1 by the 1 you 4 but by the 2 that you 4.",
  'Change your 2 and you change your 1.',
  'There are two ways of spreading 1: to be the 1 or the 1 that 4s it.',
  'Put your 1, 1, and 1 into even your smallest 2. This is the secret of 1.',
  'I am not afraid of 1, for I have seen 1 and I love 1!',
  'No matter what people tell you, 2 and 2 can change the world.',
  'Out of 2 grow 2.',
  "I believe every human has a finite number of 2. I don't intend to 4 any of mine.",
  'Let us sacrifice our 1 so that our children can have a better 1.',
];

export { templates, pluralNoun, noun, article, verb, adjective };
