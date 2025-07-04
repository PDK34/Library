

addBtn = document.querySelector(".add-book");
clsBtn = document.querySelector('.close-btn');
formContainer = document.querySelector('.form-container');

addBtn.addEventListener("click",() => {
    formContainer.style.display = 'block';
})

clsBtn.addEventListener('click',()=>{
    formContainer.style.display = 'none';
})
