let position = 0;
let slidesShow = 5;
let slidesScroll = 1;
let container = document.querySelector('.slider-container');
let track = document.querySelector('.slider-track');
let items = document.querySelectorAll('.slider-item');
let itemsCount = items.length;
let itemWidth = container.clientWidth / slidesShow;
let movePosition = slidesScroll * itemWidth;

let buttonPrev = document.querySelector('.prev');
let buttonNext = document.querySelector('.next');

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

// items.appendChild( function(i, item) {
//   items.styles.minWidth =  itemWidth + px;
// })

buttonNext.addEventListener('click', () => {
  let itemsLeft = itemsCount - (Math.abs(position) + slidesShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

buttonPrev.addEventListener('click', () => {
  let itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
})

let setPosition = () => {
  debugger;
  track.style.transform = `translateX(${position}px)`;
  debugger;
}

let checkBtns = () => {
  buttonPrev.disabled = position === 0;
  debugger;
  // buttonNext.disabled = position <= -(itemsCount - slidesShow) * itemWidth;
  if (position <= -(itemsCount - slidesShow) * itemWidth) {
    position = 0;
  }
};
let withTeamSection = document.documentElement.clientHeight;
let elem = document.getElementById('team')

function equating() {
  elem.style.width = withTeamSection + "px";
  // `${withTeamSection}px`;
}

equating();
;