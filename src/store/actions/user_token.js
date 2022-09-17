export const USER_TOKEN = 'USER_TOKEN'

export function userToken(user_token){
    return {
        type: USER_TOKEN,
        payload: {
            user_token
        }
    }
}

