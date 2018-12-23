const noteTitle = document.querySelector('#note-title');
const noteBody = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');


const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function(note){
    return note.id === noteId;
});

if (note === undefined) {
    location.assign('index.html');
};

noteTitle.value = note.title;
noteBody.value = note.body;

noteTitle.addEventListener('input',function(e){
    note.title = e.target.value;
    savedNotes(notes);
});

noteBody.addEventListener('input',function(e){
    note.body = e.target.value;
    savedNotes(notes);
});

removeElement.addEventListener('click',function(){
    removeNote(note.id);
    savedNotes(notes);
    location.assign('index.html');
});

window.addEventListener('storage', function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId;
        });
    
        if (note === undefined) {
            location.assign('index.html');
        };
    
        noteTitle.value = note.title;
        noteBody.value = note.body;
    }
});

window.addEventListener('storage', function(e){
    console.log(e);
    // if(e.key === 'notes') {
        // 1. Parse the new data and update notes
        // 2. Rerender the notes
    // }

})