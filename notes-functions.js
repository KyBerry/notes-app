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

// Save the notes to localStorage
const savedNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note from the list 
const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    });
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
    // Set up the remove note button
    button.textContent = 'X';
    noteEl.appendChild(button);
    button.addEventListener('click',function(){
        removeNote(note.id);
        savedNotes(notes);
        renderNotes(notes, filters);
    })

    // Set up the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unamed note';
    }
    textEl.setAttribute('href', `edit-note.html#${note.id}`)
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