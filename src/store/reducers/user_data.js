import {SET_USER_DATA} from "../actions/user_data";

const initialState = {
    user_data: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){
        case SET_USER_DATA:{
            const {user_data} = action.payload;
            console.log(user_data, '222222222')
            return {
                ...state,
                user_data: user_data
            }
        }
        default:{
            return state
        }
    }
}
