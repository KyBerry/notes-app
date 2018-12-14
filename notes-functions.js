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