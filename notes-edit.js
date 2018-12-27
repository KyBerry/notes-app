


const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const lastUpdated = document.querySelector('#last-edited');

const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (note === undefined) {
    location.assign('index.html');
};

noteTitle.value = note.title;
noteBody.value = note.body;
lastUpdated.textContent = generateLastEdited(note.updatedAt);

noteTitle.addEventListener('input',(e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    lastUpdated.textContent = generateLastEdited(note.updatedAt);
    savedNotes(notes);
});

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    lastUpdated.textContent = generateLastEdited(note.updatedAt);
    savedNotes(notes);
});



removeElement.addEventListener('click',() =>{
    removeNote(note.id);
    savedNotes(notes);
    location.assign('index.html');
});

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId);
        if (note === undefined) {
            location.assign('index.html');
        };
        noteTitle.value = note.title;
        noteBody.value = note.body;
        lastUpdated.textContent = generateLastEdited(note.updatedAt);
    }
});