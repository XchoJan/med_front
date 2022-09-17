export const SET_USER_DATA = 'SET_USER_DATA'

export function setUserData(user_data) {
    return{
        type: SET_USER_DATA,
        payload:{
            user_data
        }
    }
}
