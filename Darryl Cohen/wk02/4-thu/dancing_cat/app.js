
var startBTN = document.querySelector('#start-button');
var stopBTN = document.querySelector('#stop-button');
var speedBTN = document.querySelector('#speed-button')
var catPic = document.querySelector('h2');

var hdirection = 1;
var vdirection = 1;
var speedBool = true;
// var time = 100;
var catTimerID = null;

var startCatWalk = function(event, time=1) {
  debugger
  if (catTimerID === null) {
    catTimerID = setInterval(catWalk, 500/time);
  }
}

var stopCatWalk = function() {
  clearInterval(catTimerID);
  catTimerID = null;
}

var catSpeed = function() {
  stopCatWalk();
  var speed = speedBool ? 12 : 6;
  speedBool = !speedBool;
  catTimerID = null;
  startCatWalk(null, speed);
  // catPic.style.left = (parseInt(catPic.style.left) + 10) + 'px';
}

startBTN.addEventListener('click', startCatWalk);
stopBTN.addEventListener('click', stopCatWalk);
speedBTN.addEventListener('click', catSpeed);

var catWalk = function() {
  var currentLeftOffset = parseInt(catPic.style.left)
  var currentTopOffset = parseInt(catPic.style.top)

  if (currentLeftOffset > window.innerWidth - parseInt(catPic.style.width)) {
    hdirection = -1;
    catPic.classList.add('switch')
  } else if (currentLeftOffset < 0  ) {
    hdirection = 1;
    catPic.classList.remove('switch')

  } else if (currentTopOffset > window.innerHeight - parseInt(catPic.style.height)) {
      vdirection = -1;
      // catPic.classList.add('switch')
  } else if (currentTopOffset < 0  ) {
    vdirection = 1;
    // catPic.classList.remove('switch')

  }
  catPic.style.left = (currentLeftOffset + 10 * hdirection) + 'px';
  catPic.style.top = (currentTopOffset + 10 * vdirection) + 'px';
}
