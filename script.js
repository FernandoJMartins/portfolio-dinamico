document.addEventListener("DOMContentLoaded", () => {

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");


window.addEventListener('mousemove', (e) => {
  const postX = e.clientX;
  const postY = e.clientY;

  cursorDot.style.top = `${postY}px`;
  cursorDot.style.left = postX + 'px';

  // cursorOutline.style.top = postY + 'px';
  // cursorOutline.style.left = postX + 'px';
  if ( e.target.closest('#name')) {
    console.log('project');
    cursorOutline.style.opacity = 0;
  }
  else{
    cursorOutline.style.opacity = 1;
    cursorOutline.animate({
      left: postX + 'px',
      top: postY + 'px',
      display: 'block',
    }, {duration : 500, fill: 'forwards'});



  }	  


});

});