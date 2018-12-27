// Refactoring the notes-app-one and making a seperate file for all the functions in script.js

// This function reads existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    return notesJSON !== null ? JSON.parse(notesJSON) : [];
}

// Save the notes to localStorage
const savedNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Remove a note from the list 
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')
    
    // Set up the remove note button
    button.textContent = 'X';
    noteEl.appendChild(button);
    button.addEventListener('click', () => {
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

// Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        });
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
          if (a.createdAt > b.createdAt) {
              return -1
          } else if (a.createdAt < b.createdAt) {
              return 1
          } else {
              return 0
          }
        });
    } else if (sortBy === 'byAlphabet') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        });
    } else {
        notes;
    }
};

// Render application notes 
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));
    document.querySelector('#notes').innerHTML = '';  
    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    })
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `last edited ${moment(timestamp).fromNow()}`
}