import React, { useEffect, useState } from 'react';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import LoadingScreen from '../components/loading/LoadingScreen';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {startLoadNotes } from '../actions/notesActions';



export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState( true );
    const [ isLogged, setIsLogged ] = useState( false )


    useEffect( () => {
        firebase.auth().onAuthStateChanged( async ( user ) => {

            if ( user?.uid ){
                dispatch( login( user.uid, user.displayName ) )
                setIsLogged( true )
                dispatch( startLoadNotes( user.uid ) )

            }else{
                setIsLogged(false)
            }

            setChecking( false )
        })
    }, [ dispatch ])


    if( checking ) return <LoadingScreen />

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        isLogged={ isLogged } 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoute 
                        exact
                        isLogged={ isLogged }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
