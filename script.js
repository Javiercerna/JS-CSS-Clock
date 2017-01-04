
const HAND_INITIAL_ANGLE = 90;
const MAX_ANGLE = 360;
const MAX_SECONDS = 60;
const MAX_MINUTES = 60;
const MAX_HOURS = 12;

var hours_hand = document.querySelector('.hour-hand');
var minutes_hand = document.querySelector('.min-hand');
var seconds_hand = document.querySelector('.second-hand');

function startClock() {
  var now = new Date();
  setHandAngle(seconds_hand,now.getSeconds(),MAX_SECONDS);
  setHandAngle(minutes_hand,now.getMinutes(),MAX_MINUTES);
  // Set hours hand with 12 hour format (for clock)
  setHandAngle(hours_hand,now.getHours() % 12,MAX_HOURS);
}

function setHandAngle(hand,time_measure,max_time_measure)
{
  var hand_angle = time_measure*MAX_ANGLE/max_time_measure + HAND_INITIAL_ANGLE;
  hand.style.transform = 'rotate(' + hand_angle + 'deg)';
}

setInterval(startClock,1000);

startClock();
