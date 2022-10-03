
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