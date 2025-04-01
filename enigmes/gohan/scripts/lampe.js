document.addEventListener('mousemove', (e) => {
  const lampe = document.querySelector('.lampe');
  const texte = document.querySelector('.texte-revele');

  lampe.style.left = `${e.clientX}px`;
  lampe.style.top = `${e.clientY}px`;

  const lampeRect = lampe.getBoundingClientRect();
  const lampeCenterX = lampeRect.left + lampeRect.width / 2;
  const lampeCenterY = lampeRect.top + lampeRect.height / 2;

  const distanceX = Math.abs(e.clientX - lampeCenterX);
  const distanceY = Math.abs(e.clientY - lampeCenterY);

  if (distanceX < 100 && distanceY < 100) {
    texte.style.opacity = 1;
  } else {
    texte.style.opacity = 0;
  }
});
