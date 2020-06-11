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
for (const index in book) {
	const cloneBlock = bookBlock.cloneNode(true)
	if (book[index]) {
		cloneBlock.children[1].innerHTML = book[index].title
		cloneBlock.children[2].innerHTML = book[index].author
		cloneBlock.children[3].innerHTML = `Page number: ${book[index].pages}`
		if (book[index].isRead) {
			console.log(cloneBlock.children[4].children[0])
			cloneBlock.children[4].children[0].removeAttribute('name')
			cloneBlock.children[4].children[0].setAttribute('name', 'book')
		}
	}

	bookBlock.after(cloneBlock)
}

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
	book.forEach((element) => {
		if (element.title === title) {
			element.isRead = !element.isRead
			console.log(element.isRead)
		}
	})
}

// Firebase setup
// Your web app's Firebase configuration
// var firebaseConfig = {
// 	apiKey: 'AIzaSyCO5T1pbxrU08QONW0gKPG6JEj4Foh00CU',
// 	authDomain: 'simple-c89a2.firebaseapp.com',
// 	databaseURL: 'https://simple-c89a2.firebaseio.com',
// 	projectId: 'simple-c89a2',
// 	storageBucket: 'simple-c89a2.appspot.com',
// 	messagingSenderId: '877479269646',
// 	appId: '1:877479269646:web:d3d7bec204ed68aa96b35f',
// }
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)

// const db = firebase.database()

// butt.addEventListener('click', (e) => {
// 	console.log('pushed')
// 	e.preventDefault()
// 	db.ref('/something/' + test.value).set({
// 		something: test.value,
// 	})
// })

// OPEN ADD BOOK SECTION
addBookNav.addEventListener('click', () => {
	if (addBookSection[0].style.display == 'block')
		addBookSection[0].style.display = 'none'
	else addBookSection[0].style.display = 'block'
	console.log('click')
})
// todo : to add focus/blur

// ADD FUNCTION TO ADD-BOOK BTN
addBookBtn.addEventListener('click', () => {
	alert('Work')
})
