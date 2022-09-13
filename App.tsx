import * as React from 'react'

import Coach from "./src/navigations/CoachNavigations";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Coach/>
            </NavigationContainer>
        </Provider>
    )
}
