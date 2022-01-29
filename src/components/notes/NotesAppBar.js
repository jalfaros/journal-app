import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startFileUpload, startSaveNote } from '../../actions/notesActions';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( activeNote ) )
    }

    const handlePicureSave = () =>{
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( !file ) return;

        dispatch( startFileUpload( file ) )
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display:'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button className="btn" onClick={ handlePicureSave }>
                    Picture
                </button>

                <button className="btn" onClick={ handleSave }>
                    Save
                </button>
            </div>
        </div>
    )
}
