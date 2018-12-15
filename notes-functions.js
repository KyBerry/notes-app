// Refactoring the notes-app-one and making a seperate file for all the functions in script.js

// This function reads existing notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes');
    if(notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        // returns an empty array if no data found
        return [];
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p')           
    if(note.title.length > 0){
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Unamed note';
    }
    return noteEl;
}

// Render application notes 
const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    document.querySelector('#notes').innerHTML = '';  
    filteredNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}  