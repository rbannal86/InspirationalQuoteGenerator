import { nouns, adjectives } from './words.js';
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
  return adjectives[Math.floor(Math.random() * adjectives.length)];
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
  'From 3 5 1 3 5 1 may grow.',
  'The most 5 thing in the 1 is, of course, the 6 itself.',
  "We can't 4 everyone, but everyone can 7 someone.",
  'What we 4 inwardly will 4 outer reality.',
  '2 shape the course of 1.',
  'There is nothing 5 to him who will 4.',
  'God always gives His 1 to those who leave the 1 with him.',
  'Try to be like the 1 - at ease in your own 1.',
  'I believe that if one always looked at the 2, one would end up with 2.',
  'Man never made any 1 as 5 as the human 1.',
  'It is in your moments of 1 that your 1 is shaped.',
  '1 is the wind, 1 the sail, and 1 the vessel.',
  'When 2 speak, 2 are nothing.',
  'As we 4 our 1, we must never forget that the highest 1 is not to utter 2, but to 4 by them.',
  'In 3 5 way, you can 4 the 1.',
  'As 1 increases, 1 deepens.',
  '1 is the greatest gift, 1 the greatest wealth, 1 the best relationship.',
  'I arise full of 1 and 1, knowing well what 1 lies ahead of me.',
  'Whoever is 5 will make others 8 too.',
  '2 of our 2, of our 2 and our 2 will continue in 2.',
  'Throw your dreams into 1 like 3 1, and you do not know what it will bring back, a new 1, a new 1, a new 1, a new 1.',
  'What makes the 1 beautiful is that somewhere it hides a 1.',
  'Let your 1 lightly 4 on the 2 of Time like 1 on the tip of a 1.',
  'The handicap of 1 is not in the 1; it is in the 1.',
  "The only thing that ultimately matters is to 4 3 1, 4 3 1, 4 3 1, good God, now you're 5.",
  'To the 1 that is 5, the whole universe surrenders.',
  'When we seek to 4 the 1 in others, we somehow bring out the 6 in ourselves.',
  'One 1 is worth two 2.',
  'God loves to 4 him who strives to 7 himself.',
  'Your 5 1 may be right where you are now.',
  'Lord, grant that I may always 4 more than I can 4.',
  'Your are always free to change your 1 and choose a different 1, or a different 1.',
  'Everyone here has the sense that right now is one of those 2 when we are influencing the 1.',
  "Only those who have learned the power of 5 and 5 1 experience life's deepest 1: true 1.",
  'Your heart is full of 5 2, waiting to 4.',
  '1 is the only 1. 1 is 5.',
  'Every 5 1 is a stepping stone toward heaven.',
  'Plant thy 1 firmly in the 2 which His 6 has made before thee.',
  "Every man's 1 is a fairy tale written by God's 2.",
  'The 5 1 is in our blood and never will be 5.',
];

export { templates, pluralNoun, noun, article, verb, adjective };
