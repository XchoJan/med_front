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
    let [bio, setBio] = useState<any>('')
    let tokenFromReducer = useSelector((store: any) => store.user_token.user_token);
    let bioFromReducer = useSelector((store: any) => store.user_token.user_bio);
    let [verifiedUser, setVerifiedUser] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
        (async () => {
            const tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
            if (tokenFromAsyncStorage) {
                dispatch(setUserToken(tokenFromAsyncStorage));
            }
        })()
    },[])

    useEffect(() => {
        if (tokenFromReducer) {
            axios.get(baseUrl +'/me/', {
                headers: {
                    'Authorization': 'Bearer ' + tokenFromReducer,
                },
            }).then((res) => {
                console.log(res.data, 'eee')
                dispatch(setUserData(res.data))
                if (res.data.bio){
                    setBio(res.data.bio)
                }
            }).catch(e => {
                console.log(e.message, 'error while getting my profile')
            })
        }
    }, [tokenFromReducer])

    useEffect(() => {
        setBio(bioFromReducer)
    }, [bioFromReducer])

    console.log({bio, bioFromReducer})
    return (
        <NavigationContainer>
            {!tokenFromReducer ?
                <Coach/>
                :
                !bio ? <CoachVerify/> : <Main />
            }
        </NavigationContainer>
    )
}
export default AppWrapper
