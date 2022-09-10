import React from 'react';
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {View, Text, StyleSheet} from 'react-native'
import DoctorComputer from "../../assets/Icons/DoctorComputer";
import CustomButton from "../../components/CustomButton";
import {color1} from "../../helpers/colors";
import {useNavigation} from "@react-navigation/native";

const GreetingsScreen7 = () => {
    const navigation: any = useNavigation();

    return (
        <Container containerProp={styles.inlineContainer}>
            <View style={{flex: 1}}>
                <View>
                    <BackButton onPress={()=>{navigation.navigate('Greetings6')}}/>
                </View>
                <View>
                    <Text style={styles.title_h3}>
                        Перейдите к тестовой{"\n"}консультации
                    </Text>
                    <Text>
                        Тестовый звонок с “таинственным{"\n"}клиентом” от Health Buddy
                    </Text>
                </View>
                <View style={styles.image}>
                    <DoctorComputer/>
                </View>
            </View>
            <View>
                <CustomButton  title={"Начать звонок"}/>
                <CustomButton buttonStyles={styles.button_styles} buttonTitle={{color: color1}} title={"Позже"}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen7;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 15
    },
    title_h3: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10
    },
    image: {
        alignItems: "center",
        marginTop: 75
    },
    button_styles:{
        marginVertical: 15,
        backgroundColor:'transparent',
        borderWidth: 2,
        borderColor: color1
    }
})
