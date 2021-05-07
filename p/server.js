lol = Math.floor(Math.random() * 7);
cursor = ["⚡", "✨", "🦄", "🌈", "🍄", "🥐", "🛴"]
yo = cursor[lol]
console.log(yo)
document.getElementsByTagName('body')[0].style.cursor =
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='50' height='60' viewport='0 0 100 100' style='fill:black;font-size:30px;'><text y='50%'>${yo}</text></svg>") 16 0, default`
console.log(document.body.style)
var keyc = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;
document.addEventListener('keydown', function (e) {
  var key = keyc[e.keyCode];
  var requiredKey = konamiCode[konamiCodePosition];
  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  window.scrollTo(0, 0);
  document.getElementById("me").src = "me.png";
  for (i = 0; i <= 360; i++) {
    setTimeout("rotateit(" + i + ")", i);
  }
  void(0);
};

function rotateit(x) {
  x = parseInt(x);
  document.body.setAttribute('style', ' -moz-transform: rotate(' + x +
    'deg); -moz-transform-origin: 50% 50%; -webkit-transform: rotate(' + x +
    'deg); -webkit-transform-origin: 50% 50%; -o-transform: rotate(' + x +
    'deg); -o-transform-origin:50% 50%; -ms-transform: rotate(' + x +
    'deg); -ms-transform-origin: 50% 50%; transform: rotate(' + x + 'deg); transform-origin: 50% 50%;');
}
function goback() {
  window.history.back();
}