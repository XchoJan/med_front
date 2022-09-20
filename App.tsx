import * as React from 'react'

import Coach from "./src/navigations/CoachNavigations";
import {NavigationContainer} from "@react-navigation/native";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import CoachVerify from "./src/navigations/CoachVerifyNavigations";
import axios from "axios";
import {setUserData} from "./src/store/actions/user_data";
import {setUserToken} from "./src/store/actions/user_token";
import {baseUrl} from "./src/helpers/url";
import Main from "./src/navigations/CoachMainNavigations";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

const App = () => {
    let [token, setToken] = useState<any>(null)
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let [verifiedUser, setVerifiedUser] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        (async () => {
            const tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
            if (tokenFromAsyncStorage) {
                setToken(tokenFromAsyncStorage);
                dispatch(setUserToken(tokenFromAsyncStorage));
            }
        })()
    },[])

    useEffect(() => {
        if (token) {
            axios.get(baseUrl +'/me/', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            }).then((res) => {
                console.log(res.data, 'eee')
               if (res.data.bio){
                   setVerifiedUser(true)
               }
                dispatch(setUserData(res.data))
            })
        }
    }, [token])

    return (
        <NavigationContainer>
            {!tokenFromReducer ?
                <Coach/>
                 :
                <CoachVerify/>
            }
        </NavigationContainer>
    )
}
export default AppWrapper
