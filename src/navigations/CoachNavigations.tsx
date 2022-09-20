import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    FirstScreen,
    WelcomeScreen,
    CreateAccountScreen,
    PinCodeScreen,
    EnterNameScreen,
    LoginScreen,
    LoginPinScreen,
    EmailRegistration,
    LoginWithEmailScreen
} from '../screens'

function First() {
    return <FirstScreen/>
}

function Welcome() {
    return <WelcomeScreen/>
}
function EnterName() {
    return <EnterNameScreen/>
}
function CreateAccount() {
    return <CreateAccountScreen/>
}
function PinCode() {
    return <PinCodeScreen/>
}

function Login() {
    return <LoginScreen/>
}
function EmailReg() {
    return <EmailRegistration/>
}
function LoginPin({ route }: any) {
    const {phone_number, email} = route?.params
    return <LoginPinScreen email={email} phone_number={phone_number}/>
}

function LoginEmail({ route }: any) {
    return <LoginWithEmailScreen />
}

export default function Coach() {
    return (
        <Tab.Navigator
            initialRouteName='Coach'
            screenOptions={{
                headerShown: false
            }}>

            <Tab.Screen name='First' component={First}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Welcome' component={Welcome}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='EnterName' component={EnterName}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='CreateAccount' component={CreateAccount}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />

            <Tab.Screen name='PinCode' component={PinCode}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='Login' component={Login}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='LoginPin' component={LoginPin}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='EmailReg' component={EmailReg}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
            <Tab.Screen name='LoginEmail' component={LoginEmail}
                        options={({route}) => ({
                            tabBarButton: () => null,
                            tabBarStyle: {display: 'none'},
                        })}
            />
        </Tab.Navigator>
    )
}
