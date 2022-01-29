import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notesActions';


export const JournalEntry = ( {id,title, date, body, url} ) => {

    const noteDate = moment( date );    
    const dispatch = useDispatch();

    const handleActiveNote = () => {
        dispatch( activateNote(id, {
            date, title, body, url
        }))
    }


    return (

        <div className="journal__entry pointer" onClick={ handleActiveNote }>
            {
                (url)
                    && 
                    <div 
                        className="journal__entry-picture"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${ url })` 
                        }}
                    >
                    </div>
            }


            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('Do') }</h4>
            </div>

        </div>
    )
}
