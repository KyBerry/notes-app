
// All of the notes in the notes obeject that we render on the screen using the renderNotes function.

const notes = getSavedNotes();

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){

    const filteredNotes = notes.filter(function(note){


        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes').innerHTML = '';
    
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p')
            
        if(note.title.length > 0){
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unamed note';
        }


        document.querySelector('#notes').appendChild(noteEl);
    })
}   

// executing the renderNotes function;

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
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






