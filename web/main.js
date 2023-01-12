const toggleBtn = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const link = document.querySelector('.link')

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    link.classList.toggle('active');
});