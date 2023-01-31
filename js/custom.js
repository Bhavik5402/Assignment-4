burger= document.querySelector('.burger');


burger.addEventListener('click' , ()=>{
    navbar.classList.toggle('h-class');
    navlist.classList.toggle('v-class');
    rightsec.classList.toggle('v-class');

})