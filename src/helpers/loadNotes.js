import { db } from '../firebase/config'


export const loadNotes = async ( uid ) => {

    const notes = []; 
    const notesSnapshot = await db.collection(`${ uid }/journal/notes`).get();
    
    notesSnapshot.forEach( childSnap => {
        notes.push({
            id:  childSnap.id,
            ...childSnap.data()
        })
    });

    return notes; 
}