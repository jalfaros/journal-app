
import Swal from 'sweetalert2';
import { db } from '../firebase/config';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';
import { uploadFile } from '../helpers/fileUploader';

export const startNewNote = () => {
    
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newNote = { 
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${ uid }/journal/notes`).add( newNote );
        
        dispatch( activateNote( docRef.id, newNote ) );
        dispatch( addNewNoteSidebar( docRef.id, newNote ) );


    }
}

export const activateNote = ( id, newNote ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...newNote
    }
})

export const startLoadNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )
    }
}



export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        if (!note.url) delete note.url;

        const noteToFirestore = { ...note }
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update( noteToFirestore );

        dispatch( refreshUpdatedNote( note.id, noteToFirestore ) );

        Swal.fire('Saved', note.title, 'success');

    }
}

export const addNewNoteSidebar = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const refreshUpdatedNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id, 
            ...note
        }
    }
})


export const startFileUpload = ( file ) => {
    
    return async ( dispatch, getState ) => {

        const { activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false
        })
        Swal.showLoading();

        activeNote.url = await uploadFile( file );

        dispatch( startSaveNote( activeNote ) )

        Swal.close();
    }
 }


 export const startDelete = ( id ) => {
    
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch( deleteNote( id ) );
    }
 }



const deleteNote = ( id ) => ({
    type: types.notesDeleted,
    payload: id
})


const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});


