window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.slide');
  
  elements.forEach(function(element, index) {
      var position = element.getBoundingClientRect();
      setTimeout(function() {
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
              element.classList.add('transform');
          } else {
              element.classList.remove('transform');
          }
      }, index * 100); 
  });
});



