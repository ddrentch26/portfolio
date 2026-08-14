const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Lightbox applies to case-study gallery shots (not homepage cards, which
// now link out to their own case-study page instead of popping an image).
if (lightbox) {
  document.querySelectorAll('.shot').forEach(shot => {
    shot.addEventListener('click', () => {
      if (shot.classList.contains('is-empty')) return; // no real image yet
      const img = shot.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('is-open');
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.classList.remove('is-open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('is-open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lightbox.classList.remove('is-open');
  });
}
