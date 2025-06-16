const leftFrame = document.querySelector('.frame-left');
const rightFrame = document.querySelector('.frame-right');

const updateMiddleWidth = () => {
  const leftWidth = leftFrame.offsetWidth;
  const rightWidth = rightFrame.offsetWidth;
  console.log(leftWidth)

  const middle = document.querySelector('.frame-middle');
  middle.style.left = `${leftWidth + parseInt(getComputedStyle(leftFrame).left) - 1}px`;
  middle.style.right = `${rightWidth}px`;
};
window.addEventListener('load', updateMiddleWidth);
window.addEventListener('resize', updateMiddleWidth);