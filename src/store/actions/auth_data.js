export const AUTH_DATA = "AUTH_DATA"

export function authData(auth_data){
    return{
        type: AUTH_DATA,
        payload:{
            auth_data
        }
    }
}
