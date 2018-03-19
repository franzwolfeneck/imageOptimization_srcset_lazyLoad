var placeholders = document.querySelectorAll('.placeholder');
for(var i = 0; i < placeholders.length; ++i) {
  let small = placeholders[i].querySelector('.img-small')
  let img = new Image();
  img.src = small.src;
  img.onload = function() {
    small.classList.add('loaded');
  };
}

for (var i = 0; i < placeholders.length; ++i) {
  let imgLarge = new Image();
  imgLarge.src = placeholders[i].dataset.large;
  imgLarge.onload = function() {
    imgLarge.classList.add('loaded');
  };
  placeholders[i].appendChild(imgLarge);
}
