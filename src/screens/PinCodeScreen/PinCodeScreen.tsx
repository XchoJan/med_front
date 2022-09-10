import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {color2, color3} from "../../helpers/colors";
import ErrorIcon from "../../assets/Icons/ErrorIcon";
import {useNavigation} from "@react-navigation/native";
import CustomButton from "../../components/CustomButton";

const PinCodeScreen = (props: any) => {
    const navigation: any = useNavigation();
    let [pin, setPin] = useState(['', '', '', '',]);
    let [pinCode, setPinCode] = useState('');
    let [validPin, setValidPin] = useState(true);

    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={()=>{navigation.navigate('CreateAccount')}}/>
            </View>
            <View style={styles.number_box}>
                <Text style={styles.number}>
                    + 7 921 748 99 82
                </Text>
            </View>
            <View style={styles.pin_input_box}>
                {pin.map((pin) => (
                    <View style={styles.pinInput}>
                        <TextInput
                            keyboardType="numeric"
                            style={{padding: 15}}
                            maxLength={1}
                        />
                    </View>
                ))}
            </View>
            <View style={styles.enter_pin_title_box}>
                {!validPin && <View style={styles.error_message}>
                    <Text style={{color: '#DA1414'}}>
                        попробуйте другой код
                    </Text>
                    <Text style={{alignItems: 'center'}}>
                        <ErrorIcon/>
                    </Text>
                </View>}

                <Text style={styles.enter_pin_title}>
                    Введите код подтверждения
                </Text>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate("Greetings")}} title={'Продолжить'}/>
            </View>
        </Container>
    );
};

export default PinCodeScreen;
const styles = StyleSheet.create({
    backBtn: {
        marginTop: 35
    },
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    number_box: {
        marginTop: 30
    },
    number: {
        fontSize: 24,
        fontWeight: "bold"
    },
    pin_input_box: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20
    },
    pinInput: {
        width: '20%',
        backgroundColor: color2,
        borderRadius: 15,
        height: 47
    },
    enter_pin_title_box: {
        marginTop: 15,
        flex: 1
    },
    enter_pin_title: {
        color: color3
    },
    error_message: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#FEEFEF',
        padding: 10,
        borderRadius: 15,
        marginVertical: 5
    }
})
