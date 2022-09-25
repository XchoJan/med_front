import * as React from 'react'
import {LogBox} from "react-native";
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
import ClientVerifyNavigations from "./src/navigations/ClientNavigations/ClientVerifyNavigations";
LogBox.ignoreAllLogs(true)

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
    let user_data = useSelector((store: any) => store.user_data?.user_data)
    let [verifiedUser, setVerifiedUser] = useState(false)
    let [role, setRole] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const tokenFromAsyncStorage = await AsyncStorage.getItem('userToken');
            if (tokenFromAsyncStorage) {
                dispatch(setUserToken(tokenFromAsyncStorage));
            }
        })()
    }, [])

    useEffect(() => {
        if (tokenFromReducer) {
            axios.get(baseUrl + '/me/', {
                headers: {
                    'Authorization': 'Bearer ' + tokenFromReducer,
                },
            }).then((res) => {
                console.log(res.data, 'eee')
                dispatch(setUserData(res.data))
                if (res.data.bio) {
                    setBio(res.data.bio)
                } else if (res.data.user.role === 'client') {
                    setRole(res.data.user.role)
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
    console.log(user_data, 'RRRR')

    const returnStacks = () => {
        if (!tokenFromReducer){
            return <Coach/>
        }else if (bio && tokenFromReducer){
            console.log(444)
            return <Main/>
        }else if (tokenFromReducer && user_data.user?.role == 'coach' && !bio){
            console.log(333)
            return <CoachVerify/>
        }else if (tokenFromReducer && role === 'client'){
            console.log(222)
            return <ClientVerifyNavigations/>
        }
    }

    return (
        <NavigationContainer>
            {returnStacks()}
        </NavigationContainer>
    )
}
export default AppWrapper
