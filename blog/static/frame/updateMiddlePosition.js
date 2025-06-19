const leftFrame = document.querySelector('.frame-left');
const rightFrame = document.querySelector('.frame-right');

const updateMiddlePosition = () => {
  const leftWidth = leftFrame.offsetWidth;
  // const rightWidth = rightFrame.offsetWidth;
  console.log(leftWidth)

  const middle = document.querySelector('.frame-middle');
  middle.style.left = `${leftWidth + parseInt(getComputedStyle(leftFrame).left) - 1}px`; // Overlap by 1px so the calculation is not obvious
  // middle.style.right = `${rightWidth}px`;
};
window.addEventListener('load', updateMiddlePosition);
window.addEventListener('resize', updateMiddlePosition);