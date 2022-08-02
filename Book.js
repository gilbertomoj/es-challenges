class Book {
    constructor(id, title, author, description){
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }
}

class Library {

    constructor(){
        this.books = []
    }

    addBook(book){
        this.books.push(book)
        // console.log("\""+ book.title + "\" adicionado à biblioteca")
    }

    getBooks(){
        return this.books;
    }
    removeBooks(id){
        this.books = this.books.map((element, index) => {
            if(element.id != id){
                return element
            }
        })
    }

    getBookById(id){
        var book = this.books.map((element, index) => {
            if(element.id == id){
                return element
            }
        })
        return book
    }

 

    updateBookById(id, title, author, description){
        this.books.forEach(element => {
            if (element.id == id){
                element.title = title
                element.author = author
                element.description = description
            }
        })
    }
}

var book1 = new Book(1, "O alienista","Machado de Assis","O Alienista é uma obra literária humorística do escritor brasileiro Machado de Assis.")
var lib = new Library()
lib.addBook(book1)
//
var books = lib.getBooks()
console.log(books)

// 
var books = lib.getBookById(1)
console.log(books)
//
var updt_book = lib.updateBookById(1, "Alienista", "Machado", "lorem ipsum")
var books = lib.getBooks()
console.log(books) 
//
var del_book = lib.removeBooks(1)
var books = lib.getBooks()
console.log(books) 

