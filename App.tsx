import * as React from 'react'

import Coach from "./src/navigations/CoachNavigations";
import {NavigationContainer} from "@react-navigation/native";

export default function App(){
    return(
        <NavigationContainer>
            <Coach/>
        </NavigationContainer>
    )
}
