document.querySelectorAll('.menu-categories button').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
  
      // Tıklanan zaten açıksa kapat
      if (targetSection.classList.contains('active')) {
        targetSection.classList.remove('active');
      } else {
        // Diğer açık olanları kapat
        document.querySelectorAll('.menu-section').forEach(section => {
          section.classList.remove('active');
        });
        // Tıklananı aç
        targetSection.classList.add('active');
        // Gerekirse scroll yapabilirsin
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  