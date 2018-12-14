
// All of the notes in the notes obeject that we render on the screen using the renderNotes function.

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

// We are using this object to store the search text in the input field.
// Everytime we input a new character the renderNotes function gets run and 
// The filters.searchText gets updated.

const filters = {
    searchText: ''
}
// const user = {
//     name: 'Kyle',
//     age: 23
// }

// const userJSON = JSON.stringify(user);
// console.log(userJSON);

const userJSON = localStorage.getItem('user');
const user =  JSON.parse(userJSON);
console.log(`${user.name} is ${user.age}`);



// Creating a function that takes in two arguments the notes that we mentioned above an any notes we've yet to create.
// Or we can pass in a whole new array of notes.
// The second argument is the filters object (Things we are trying to filter with the notes). The filters object includes searchText

const renderNotes = function(notes, filters){
    // creating a new array using the filter method and pushing all the filtered elements to the filtered Notes Array.
    const filteredNotes = notes.filter(function(note){

        // returning things to the new array if the notes title includes the filters searchText value.
        // if it doesnt include anything nothing will get added to the new array. 
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    // This clears all of the inner HTML in the div with the ID notes.
    document.querySelector('#notes').innerHTML = '';
    
    // forEach item in the filteredNotes array it will create a p element then set the textContent
    // To the note.title adn then it will append it to the div with the ID of notes.
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
}   

// executing the renderNotes function;

renderNotes(notes, filters);

// Sets an eventListener on the create note button when clicked it will 
// target the button and change the textContent to 'The button was clicked'.

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'The button was clicked';
})


// Adds the input event that listens for a change everytime we type a new character.
// When we add a new character the renderNotes function runs
// Whatever the search box input is we set the value of the search text in the filters object to that value.

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
})






