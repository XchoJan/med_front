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
import {userToken} from "./src/store/actions/user_token";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

const App = () => {
    let [userToken, setUserToken] = useState<any>(null)
    let isLogined = useSelector((store: any) => store.is_logged.is_logged);
    let Token = useSelector((store: any) => store.user_token);
    let AuthStr = 'Bearer ' + userToken;
    console.log(Token, 'Token')
    const dispatch = useDispatch()

    useEffect(()=>{
        AsyncStorage.getItem('userToken').then(r => dispatch(userToken(r)))
    },[])

    useEffect(() => {
        axios.get('http://137.184.130.229/user/me/', {
            headers: {
                'Authorization': AuthStr,
            },
        }).then((res) => {
            console.log(res.data, 'eee')
            dispatch(setUserData(res.data))
        })
    }, [userToken])
    console.log(Token, 2222)

    return (
        <NavigationContainer>
            {!userToken ?
                <Coach/>
                 :
                <CoachVerify/>
            }
        </NavigationContainer>
    )
}
export default AppWrapper
