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
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')
    
    // Set up the remove note button
    button.textContent = 'X';
    noteEl.appendChild(button);

    // Set up the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unamed note';
    }
    noteEl.appendChild(textEl);

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