const tumbmailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const thumbnailList = document.querySelector('.pictures');
const createThumbnail = ({comments, description, likes, url})=>{
  const thumbnail = tumbmailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const createThumbnails = (pictures) => {
  const thumbnailFragment = document.createDocumentFragment();
  pictures.forEach((picture)=> {
    const thumbnail = createThumbnail(picture);
    thumbnailFragment.append(thumbnail);
  });
  thumbnailList.append(thumbnailFragment);
};

export{createThumbnails};
