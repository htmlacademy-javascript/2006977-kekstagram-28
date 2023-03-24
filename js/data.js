import {generateUniqueNumber, getRandomInteger, getRandomArrayElement} from './util.js';

const PHOTO_COUNT = 25;
const AVATAR_MAX_COUNT = 6;
const AVATAR_MIN_COUNT = 1;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 5;
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Поймала дзен.',
  'Здесь должна быть какая-нибудь юморная подпись, но мне сегодня лень.',
  'На тот случай, если вы забыли, как я выгляжу',
  'Бывают моменты, ради которых не жалко и целой жизни.',
  'Похоже у меня аллергия на утро.',
  'Табличка сарказм.',
  'А что так можно было!?',
  'Ещё немного моего летнего спама.',
  'Поднимаю настроение себе минифотосессией.',
  'День, проведённый на природе не бывает прожитым зря!',
];
const NAMES = [
  'Пенелопа',
  'Агриппин',
  'Евлампий',
  'Адель-Иллария',
  'Пульхерия',
  'Ферапонт',
];

const commentId = generateUniqueNumber();

const createComment = () => ({
  id: commentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoContent = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENT_COUNT)}, createComment)
});

const getContent = () => Array.from ({length: PHOTO_COUNT}, (_, pictureIndex) => createPhotoContent(++pictureIndex));

export {getContent};
