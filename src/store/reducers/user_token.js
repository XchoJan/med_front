import {USER_TOKEN} from "../actions/user_token";
const initialState = {
    user_token: '',
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case USER_TOKEN:{
            const {user_token} = action.payload;
            console.log(user_token, '3333')
            return {
                ...state,
                user_token: user_token
            }
        }
        default:{
            return state
        }
    }
}
