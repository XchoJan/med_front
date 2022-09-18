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
    LoginPinScreen
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
function LoginPin({ route, navigation }: any) {
    const {phone_number} = route?.params
    return <LoginPinScreen phone_number={phone_number}/>
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
        </Tab.Navigator>
    )
}
