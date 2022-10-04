
export function carousel() {
  const carousel = document.getElementById("carousel") as HTMLElement,
    content = document.getElementById("content") as HTMLElement,
    next = document.getElementById("next") as HTMLElement,
    prev = document.getElementById("prev") as HTMLElement;

  next.addEventListener("click", e => {
    carousel.scrollBy(width, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.display = "flex";
    }
    if (content.scrollWidth - width <= carousel.scrollLeft + width) {
      next.style.display = "none";
    }
  });

  prev.addEventListener("click", e => {
    carousel.scrollBy(-width, 0);
    if (carousel.scrollLeft - width <= 0) {
      prev.style.display = "none";
    }
    if (content.scrollWidth - width <= carousel.scrollLeft + width) {
      next.style.display = "flex";
    }
  });

  let width = carousel.offsetWidth;
  window.addEventListener("resize", e => (width = carousel.offsetWidth));
}