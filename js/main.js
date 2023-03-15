const PHOTO_ID_COUNT = 25;
const AVATAR_MAX_COUNT = 6;
const AVATAR_MIN_COUNT = 1;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 5;
const COMMENT_PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTION_PHRASES = [
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIDGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const createCommentId = createIDGenerator();
createCommentId();

const createMessage = () =>
  Array.from({length:getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENT_PHRASES)).join(' ');
createMessage();

const createDescription = () =>
  Array.from({length: 1}, () => getRandomArrayElement(DESCRIPTION_PHRASES));
createDescription();

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});
createComment();

const createPhoto = () => ({
  id: getRandomInteger(1, PHOTO_ID_COUNT),
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: createDescription(),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENT_COUNT)}, createComment)
});
createPhoto();
