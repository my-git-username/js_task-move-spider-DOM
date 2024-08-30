'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const wallBorder = parseInt(getComputedStyle(wall).border);

  let spiderX = e.clientX - wallRect.x - spider.offsetWidth - wallBorder;
  let spiderY = e.clientY - wallRect.y - spider.offsetHeight - wallBorder;

  const maxLeft = wall.offsetWidth - spider.offsetWidth - wallBorder * 2;
  const maxTop = wall.offsetHeight - spider.offsetHeight - wallBorder * 2;

  spiderX = Math.min(Math.max(spiderX, 0), maxLeft);
  spiderY = Math.min(Math.max(spiderY, 0), maxTop);

  spider.style.position = 'absolute';

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
