import { types } from '../types/types'



export const setError = ( msg ) => ({
    type: types.uiSetError,
    payload: msg
});

export const removeError = () => ({
    type: types.uiRemoveError
});


export const setLoading = () => ({
    type : types.uiSetLoading
});

export const unSetLoading = () => ({
    type : types.uiUnsetLoading
});

