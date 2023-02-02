const moreBtn = document.querySelector('.info .Text .moreBtn');
const title = document.querySelector('.info .Text .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});