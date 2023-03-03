const navLinks = document.querySelectorAll('main-nav nav-links a link-item');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({behavior: 'smooth'});
  });
});


