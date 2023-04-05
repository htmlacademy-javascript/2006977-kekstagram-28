const miniatureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const miniaturesList = document.querySelector('.pictures');
const CreateMiniature = ({comments, likes, url})=>{
  const miniature = miniatureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;

  return miniature;
};

const CreateMiniatures = (pictures) => {
  const miniatureFragment = document.createDocumentFragment();
  pictures.forEach((picture)=> {
    const miniature = CreateMiniature(picture);
    miniatureFragment.append(miniature);
  });
  miniaturesList.append(miniatureFragment);
};

export{CreateMiniatures};
