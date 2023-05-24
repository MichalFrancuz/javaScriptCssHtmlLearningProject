var BOOK_API = 'https://example.com/books'

class Bookshelf {
    constructor() {
        this.favoriteBooks = []
    }
    addFavoriteBook(bookName) {
        if (!bookName.includes('Great')) {
            this.favoriteBooks.push(bookName)
        }
    }
    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`)
        for (let bookName of this.favoriteBooks) {
            console.log(bookName) //bookName
        }
    }
}

function loadBooks(theBookshelf) {
    fakeAjax(BOOK_API, function onBooks(bookNames) {
        for (let bookName of bookNames) {
            theBookshelf.addFavoriteBook(bookName)
        }
        theBookshelf.printFavoriteBooks()
    })
}

function fakeAjax(url, callback) {
    setTimeout(function fakeLoadingDelay() {
        callback(['A Song of Ice and Fire', 'The Great Gatsby', 'Crime & Punishment', 'Great Expectations', 'You Don\'t Know JS'])
    }, 500)
}

var myBookshelf = new Bookshelf()
loadBooks(myBookshelf)
