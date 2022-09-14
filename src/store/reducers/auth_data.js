import {SET_FORM_DATA} from "../actions/auth_data";

const initialState = {
    formData: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET_FORM_DATA:{
            const {formData} = action.payload;
            console.log(formData, 'asdasdasdasd')

            return {
                ...state,
                formData: formData
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

