const release = document.querySelector('.release');
const threshold = 0.55;

const observer = new IntersectionObserver(([entry]) => {
  if (entry.intersectionRatio >= threshold) {
    release.classList.add('celebrate');
    observer.disconnect();
  }
}, { threshold });

observer.observe(release);
