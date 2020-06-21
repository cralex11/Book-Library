// ============================
//         DOM
// ============================
const bookBlock = document.querySelector('.library__book')
const bookTitle = document.querySelector('.book__title')
const bookAuthor = document.querySelector('.book__author')
const bookPage = document.querySelector('.book__page')
const isRead = document.querySelector('.read')
const addBookNav = document.getElementById('addBookNav')
const addBookSection = document.getElementsByClassName('add-book')
const addBookBtn = document.getElementById('add-book-btn')

const book = [
	{
		title: 'Amintiri din copilarie',
		author: 'Ion Creanga',
		pages: '210',
		isRead: true,
	},
	{
		title: 'Povara bunatatii noastre',
		author: 'Ion Druta',
		pages: '311',
		isRead: false,
	},
	{
		title: 'Padurea spanzuratilor',
		author: 'Marin Preda',
		pages: '256',
		isRead: true,
	},
	{
		title: 'Dor de dor de tine',
		author: 'Constantin Preda',
		pages: '302',
		isRead: false,
	},
]

// const number = 4
// for (let index = 0; index < number; index++) {
// Add books on page
// for (const index in book) {
// 	const cloneBlock = bookBlock.cloneNode(true)
// 	if (book[index]) {
// 		cloneBlock.children[1].innerHTML = book[index].title
// 		cloneBlock.children[2].innerHTML = book[index].author
// 		cloneBlock.children[3].innerHTML = `Page number: ${book[index].pages}`
// 		if (book[index].isRead) {
// 			console.log(cloneBlock.children[4].children[0])
// 			cloneBlock.children[4].children[0].removeAttribute('name')
// 			cloneBlock.children[4].children[0].setAttribute('name', 'book')
// 		}
// 	}

// 	bookBlock.after(cloneBlock)
// }

// OPEN ADD BOOK SECTION
addBookNav.addEventListener('click', () => {
	if (addBookSection[0].style.display == 'block')
		addBookSection[0].style.display = 'none'
	else addBookSection[0].style.display = 'block'
})
// TODO: to add focus/blur
// ---------FUNCTIONS-----
// CHECK IF THE BOOK IS READ AND CHANGE ICON AND VALUE
function haveRead(bookButt) {
	bookButt = bookButt.children[0]
	let title = bookButt.parentNode.parentNode.children[1].innerHTML
	let currentStatus = bookButt.getAttribute('name')
	if (currentStatus === 'book-outline') {
		bookButt.removeAttribute('name')
		bookButt.setAttribute('name', 'book')
	} else {
		bookButt.removeAttribute('name')
		bookButt.setAttribute('name', 'book-outline')
	}
	// TODO: fix haveRead function
	book.forEach((element) => {
		if (element.title === title) {
			element.isRead = !element.isRead
			console.log(element.isRead)
		}
	})
}

// Reload book library
function reloadBooks(i) {
	const library = document.getElementsByClassName('library')[0]
	const libraryBook = document.createElement('div')
	const bookImg = document.createElement('figure')
	const figureImg = document.createElement('img')
	const bookTitle = document.createElement('h4')
	const bookAuthor = document.createElement('span')
	const bookPage = document.createElement('span')
	const buttonSubmit = document.createElement('button')
	const icon = document.createElement('ion-icon')
	//Local Storage
	const localBook = localStorage.getItem(i)
	const bookObj = JSON.parse(localBook)
	//Setup
	// const defaultCover = 'https://source.unsplash.com/RrhhzitYizg/480x720'
	const defaultCover = 'res/cover.jpeg'
	libraryBook.className = 'library__book'
	bookImg.className = 'book__img'
	figureImg.className = 'figure__img'
	bookTitle.className = 'book__title'
	bookAuthor.className = 'book__author'
	bookPage.className = 'book__page'
	icon.setAttribute('name', 'book-outline')
	icon.className = 'isRead'
	buttonSubmit.className = 'read'
	bookTitle.innerHTML = bookObj.title
	bookPage.innerHTML = bookObj.pages
	bookAuthor.innerHTML = bookObj.author
	buttonSubmit.setAttribute('onclick', 'haveRead(this)')

	if (Object.keys(bookObj.cover) == 0)
		figureImg.setAttribute('src', defaultCover)
	else figureImg.setAttribute('src', bookObj.cover + '/480x720')
	// bookObj.cover
	console.log('reloadBooks -> bookObj.cover', bookObj.cover)
	console.log('bookObj', bookObj)

	console.log(
		'reloadBooks -> Object.keys(bookObj.cover) === 0',
		Object.keys(bookObj.cover) == 0
	)
	//setup the block
	buttonSubmit.appendChild(icon)
	bookImg.appendChild(figureImg)
	libraryBook.appendChild(bookImg)
	libraryBook.appendChild(bookTitle)
	libraryBook.appendChild(bookAuthor)
	libraryBook.appendChild(bookPage)
	libraryBook.appendChild(buttonSubmit)
	library.appendChild(libraryBook)
}

// FUNCTION TO ADD-BOOK BTN
addBookBtn.addEventListener('click', () => {
	// add book window
	let bookNameAddNewBookSection = document.getElementById('bookName').value
	let bookAuthorAddNewBookSection = document.getElementById('bookAuthor').value
	let bookPagesAddNewBookSection = document.getElementById('pageNumber').value
	const bookIsReadAddNewBookSection = document.getElementById('isReadCheckbox')

	// check is the input is empty
	if (bookNameAddNewBookSection.length != 0)
		if (bookAuthorAddNewBookSection != 0)
			if (bookPagesAddNewBookSection != 0) {
				localStorage.setItem(
					localStorage.length + 1,
					JSON.stringify({
						title: bookNameAddNewBookSection,
						author: bookAuthorAddNewBookSection,
						pages: bookPagesAddNewBookSection,
						cover: bookCover,
						isReadBBB: bookIsReadAddNewBookSection.checked,
					})
				)

				document.getElementById('bookName').value = ''
				document.getElementById('bookAuthor').value = ''
				document.getElementById('pageNumber').value = ''
				document.getElementById('bookCover').value = ''
			}
	// reload books library
	reloadBooks(localStorage.length)
})

// Show Local Store
function showLocalStorage() {
	for (let i = 1; i <= localStorage.length; i++) {
		console.log(JSON.parse(localStorage.getItem(i)))
	}
}

document.addEventListener('DOMContentLoaded', () => {
	for (let i = 1; i <= localStorage.length; i++) reloadBooks(i)
})
