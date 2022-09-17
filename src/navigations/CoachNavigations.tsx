import * as React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

let Tab = createBottomTabNavigator();

import {
    FirstScreen,
    WelcomeScreen,
    CreateAccountScreen,
    PinCodeScreen,
    EnterNameScreen,
    GreetingsScreen,
    GreetingsScreen2,
    GreetingsScreen3,
    GreetingsScreen4,
    GreetingsScreen5,
    GreetingsScreen6,
    GreetingsScreen7,
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
        </Tab.Navigator>
    )
}
