import { types } from "../types/types";
import { firebase, googleAuthProvider } from '../firebase/config'
import { setLoading, unSetLoading } from "./uiActions";
import Swal from 'sweetalert2'

// Cuando se realicen peticiones asíncronas, siempre se devuelve un callback
// y ese mismo llama al dispatch para enviar los datos al reducer que actualiza el state de la aplicación

export const startLoginEmailPassword = ( email, password ) => {

    return ( dispatch ) => {

        dispatch( setLoading() )
        
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                console.log( user )
                dispatch( login( user.uid, user.displayName ) );
            }).catch( (e) => {
                Swal.fire('Error', e.message, 'error');
            })

        dispatch( unSetLoading() )
    }
};

export const startRegisterLocal = ( email, password, name ) => {

    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) =>  {
                await user.updateProfile({ displayName: name });
                dispatch( 
                    login( user.uid, user.displayName ) 
                    );
            
            }).catch( e => {
                Swal.fire('Error', e.message, 'error');
            });   
    }
};


export const startGoogleLogin = () => {
    return async ( dispatch ) => {
        const { user } = await firebase.auth().signInWithPopup( googleAuthProvider );
        dispatch( login( user.uid, user.displayName ) )
    }
}; 


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {

    return async ( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout() )
        dispatch( cleanNotes() )
    }
}

const cleanNotes = () => ({
    type: types.notesLogout
})

const logout = () => ({ 
    type: types.logout 
})




