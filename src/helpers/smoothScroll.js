const smoothScrollTo = (target, offset = 0) => {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - offset;
  const duration = 500;
  let startTimestamp = null;

  function scrollAnimation(timestamp) {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = timestamp - startTimestamp;
    const easeProgress = Math.min(progress / duration, 1);
    const easedScroll = easeProgress * distance + startPosition;
    window.scrollTo(0, easedScroll);
    if (progress < duration) requestAnimationFrame(scrollAnimation);
  }

  requestAnimationFrame(scrollAnimation);
};

export default smoothScrollTo;
