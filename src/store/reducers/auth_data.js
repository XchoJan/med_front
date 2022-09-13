import {AUTH_DATA} from "../actions/auth_data";

const initialState = {
    auth_data: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case AUTH_DATA:{
            const {auth_data} = action.payload;
            console.log(auth_data, 'auth_data_log')
            return {
                ...state,
                auth_data: [...state.auth_data, auth_data]
            }
        }
        default:{
            return state
        }
    }
}



/*    username: '',
        phone_number: '',
        avatar: '',
        bio: '',
        education: '',
        resume: '',
        photo: '',
        initial_consultation_checklist:'',
        theses: ''*/

