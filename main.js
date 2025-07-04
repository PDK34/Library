
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

function removeBook(id){
    const ind = myLib.findIndex((book)=>book.id === id);
    if(ind!==-1){
        myLib.splice(ind,1);
        displayBooks();
    }
}

function toggleReadStatus(id){
    const book = myLib.find((b)=>b.id == id);
    if(book){
        book.toggleRead();
        displayBooks();
    }
}
function displayBooks(){

}

addBtn = document.querySelector(".add-book");
clsBtn = document.querySelector('.close-btn');
formContainer = document.querySelector('.form-container');

addBtn.addEventListener("click",() => formContainer.style.display = 'block')
clsBtn.addEventListener('click',()=>  formContainer.style.display = 'none')
