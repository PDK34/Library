const myLib = [];
function Book(title,author,pages,read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function addBook(title,author,pages,read){
    const book = new Book(title,author,pages,read);
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

const cardContainer = document.querySelector('.cards')
function displayBooks(){
    cardContainer.innerHTML = '';
    myLib.forEach((book) => {
        

        const div = document.createElement('div');
        div.classList.add('card');

        const title = document.createElement('div')
        title.textContent = book.title
        title.classList.add('name')
        div.appendChild(title)
    
        const author = document.createElement('div')
        author.textContent = `By ${book.author}`
        div.appendChild(author);

        const pages = document.createElement('div')
        pages.classList.add('pages')
        pages.textContent = `No. of pages: ${book.pages}`
        div.appendChild(pages);

        const seen = document.createElement('div')
        seen.classList.add('seen')
        const span = document.createElement('span')
        span.textContent = 'Read?'
        seen.appendChild(span)
        const input = document.createElement('input')
        input.type = 'checkbox';
        input.checked = book.read;
        input.addEventListener('change' ,()=>toggleReadStatus(book.id))
        seen.append(span,input);
        div.appendChild(seen);

        const close = document.createElement('button')
        close.classList.add('remove-btn')
        close.textContent = '❌';
        close.addEventListener('click' , ()=> removeBook(book.id));
        div.appendChild(close)

        cardContainer.appendChild(div);
    })

}

formContainer = document.querySelector('.form-container');
form =document.querySelector('.add-form')
saveBtn = document.querySelector('.submit');
addBtn = document.querySelector(".add-book");
clsBtn = document.querySelector('.close-btn');
bName = document.querySelector('#name')
authName = document.querySelector('#auth-name')
pageNo = document.querySelector('#page-no')
readCheck = document.querySelector('#read-check')
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const name = bName.value
    const author = authName.value
    const pages = pageNo.value;
    const read = readCheck.checked
    addBook(name,author,pages,read)
    form.reset()
    formContainer.style.display = 'none'
})
addBtn.addEventListener("click",() => formContainer.style.display = 'block')
clsBtn.addEventListener('click',()=>  formContainer.style.display = 'none')
