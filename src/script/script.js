

export function carousel(){
  const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");
  
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

/* Modal */


  export function Modaltext(){

    var Modal = document.getElementById('ModalFoto')
    Modal.addEventListener('show.bs.modal', function (event) {

    var button = event.relatedTarget

    var name = button.getAttribute('data-bs-name')
    var foto = button.getAttribute('data-bs-foto')

    var modalTitle = Modal.querySelector('.modal-title')
    var modalBodyImg = Modal.querySelector('.modal-body img')

    modalTitle.textContent = name
    modalBodyImg.src = foto
})}