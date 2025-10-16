
    const announcement = document.querySelector('.announcement-right');
    announcement.addEventListener('click', () => {
      const url = announcement.getAttribute('data-url');
      window.open(url, "_blank");
    });

    
   window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.joint, .joi,  .smooth-img, .bottom, .speech, .debatee');
    const screenPosition = window.innerHeight / 1.2; 

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < screenPosition && elementBottom > 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show'); 
      }
    });
  });
  

  

