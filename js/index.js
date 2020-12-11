var display = document.getElementById('display');
var caption = document.getElementById('caption');
var photos = document.getElementsByClassName('photo');

['mouseover', 'focus'].forEach(function(e) {
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

['mouseout', 'blur'].forEach(function(e) {
  for (var i = 0; i < photos.length; i++) {
    photos[i].addEventListener(e, function() {
      console.log("mouseout" + " " + this.getAttribute('src'));
      display.style.backgroundImage = null;
      display.innerHTML = 'Hover over an image below to see it enlarged here.';
      caption.innerHTML = '';
      caption.classList.remove('caption');
    });
  };
});
