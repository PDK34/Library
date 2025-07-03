

addBtn = document.querySelector(".add-book");
formContainer = document.querySelector('.form-container');
addForm = document.querySelector('.add-form'); 
addBtn.addEventListener("click",() => {
    addForm.style.display = 'flex';
    formContainer.style.display = 'block';
})

