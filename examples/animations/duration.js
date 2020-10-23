var subRatingsLine = document.querySelectorAll(".sub-ratings-line");
subRatingsLine.forEach(function(value) {
  value.classList.toggle("show-line");

  setTimeout(function() {
    value.classList.toggle("show-line");
    console.log('transition line');
  }, 8000);
});

/* var subRatings = document.querySelectorAll(".sub-ratings");
subRatings.forEach(function(value) {
  value.classList.toggle("show-text");

  setTimeout(function() {
    value.classList.toggle("show-text");
    console.log('transition text');
  }, 6800);
}); */