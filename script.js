const body = document.getElementsByTagName('body');
const header = document.querySelector('.header');

window.addEventListener('scroll', (e)=> {
    if(scrollY > 0) {
        header.classList.remove('header');
        header.classList.add('header-scroll');
        
    } else {
        header.classList.remove('header-scroll');
        header.classList.add('header');
    }
})
