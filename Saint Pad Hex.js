// Make the full announcement line clickable
    const announcement = document.querySelector('.announcement-right');
    announcement.addEventListener('click', () => {
      const url = announcement.getAttribute('data-url');
      window.open(url, "_blank");
    });

    
   window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.joint, .joi');
    const screenPosition = window.innerHeight / 1.2; // aho bigaragara kuri screen

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      // Iyo ikintu kiri muri screen
      if (elementTop < screenPosition && elementBottom > 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show'); // ikibura kuri screen gisubira hasi gahoro
      }
    });
  });

  

