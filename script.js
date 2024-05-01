const btn = document.querySelector('#button');

const modal = document.querySelector('.two');

const closeBtn2 = document.querySelector('.btn1')

btn.addEventListener('click', ()=>{

    modal.style.display = 'flex'
})


closeBtn2.addEventListener('click', ()=>{

    modal.style.display = 'none'
})