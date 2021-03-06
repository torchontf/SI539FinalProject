var display = document.getElementById('display');
var caption = document.getElementById('caption');
var photos = document.getElementsByClassName('photo');


['click', 'keypress'].forEach(function(e) {
  for (var i = 0; i < photos.length; i++) {
    photos[i].addEventListener(e, function() {
      console.log('mouseover' + ' ' + this.getAttribute('src'));
      var width = display.clientWidth;
      var height = display.clientHeight
      display.style.backgroundImage = "url(" + this.getAttribute('src') + ")";
      display.style.backgroundSize = width + "px " + height + "px";
      display.innerHTML = '';
      caption.innerHTML = this.getAttribute('alt');
      caption.classList.add('caption');
    });
  };
});
