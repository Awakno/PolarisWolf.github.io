window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-menu');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 100) {
      navbar.classList.add('navbar-top');
    } else {
      navbar.classList.remove('navbar-top');
    }
  });


  window.addEventListener('scroll', function() { var competencesSection = document.querySelector('#competences'); var competencesPosition = competencesSection.offsetTop; var scrollPosition = window.pageYOffset || document.documentElement.scrollTop; var windowHeight = window.innerHeight;

  if (scrollPosition >= competencesPosition - windowHeight + 200) { var progressBars = document.querySelectorAll('.progress');

progressBars.forEach(function(bar) {
  var width = bar.style.width;
  bar.style.width = '0';
  var progress = 0;
  var animation = setInterval(fillProgress, 10);

  function fillProgress() {
    if (progress >= parseInt(width)) {
      clearInterval(animation);
    } else {
      progress++;
      bar.style.width = progress + '%';
    }
  }
});
}
});


  

