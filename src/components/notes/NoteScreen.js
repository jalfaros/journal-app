import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/userForm'
import { useRef } from 'react'
import { activateNote, startDelete } from '../../actions/notesActions'

export const NoteScreen = () => {

    const { activeNote } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset] = useForm(activeNote); 
    const { title, body } = formValues;

    const activeId  = useRef( activeNote.id );
    const dispatch = useDispatch();


    const handleDelete = () => {
        dispatch( startDelete( activeId.current ) ); 
    }

    useEffect(() => {
        if ( activeNote.id !== activeId.current){
            reset( activeNote )
            activeId.current = activeNote.id;
        }
    }, [ activeNote, reset ])

    useEffect(() => {
        dispatch( activateNote( formValues.id, { ...formValues } ) );
    },[ formValues, dispatch ])
    
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange={ handleInputChange }
                    name="title"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value = { body }
                    onChange={ handleInputChange }
                    name="body"
                ></textarea>

                {
                    (activeNote.url)
                        &&
                        <div className="notes__image">
                            <img 
                                alt="imagen"
                                src={ activeNote.url }
                            />
                        </div>
                }

            </div>

            <button className='btn btn-danger' onClick={ handleDelete }>
                <i className='fa fa-trash'></i>
            </button>
        </div>
    )
}
