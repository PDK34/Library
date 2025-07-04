
const myLib = [];
function Book(){
    this.id = crypto.randomUUID;
    this.title = title;
    this.author = author;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBook(title,author,read){
    const book = new Book(title,author,read);
    myLib.push(book);
    displayBooks();
}


addBtn = document.querySelector(".add-book");
clsBtn = document.querySelector('.close-btn');
formContainer = document.querySelector('.form-container');

addBtn.addEventListener("click",() => formContainer.style.display = 'block')
clsBtn.addEventListener('click',()=>  formContainer.style.display = 'none')
