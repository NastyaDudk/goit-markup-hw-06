const buttonElem = document.querySelector('.gamburger-open');
const modalElem = document.querySelector('.modal-header');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;


const closeModal = event => {
    const target = event.target;

    var span = document.getElementsByClassName("close-but")[0];


    setTimeout(() => {
        modalElem.style.visibility = 'hidden';
    }, 300)
 }




const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
}

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);


    








