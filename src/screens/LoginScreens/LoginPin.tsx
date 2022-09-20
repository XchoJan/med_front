import * as React from 'react';
import {View, StyleSheet, Text, TextInput} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {color2} from "../../helpers/colors";
import axios from "axios";
import {setUserToken} from "../../store/actions/user_token";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {baseUrl} from "../../helpers/url";

const LoginPin = (props: any) => {
    const dispatch = useDispatch()
    const navigation: any = useNavigation();
    let pin2Ref = useRef(null)
    let pin3Ref = useRef(null)
    let pin4Ref = useRef(null)
    const [pin1, setPin1] = useState('')
    const [pin2, setPin2] = useState('')
    const [pin3, setPin3] = useState('')
    const [pin4, setPin4] = useState('')
    const pin = pin1 + pin2 + pin3 + pin4

    console.log(props.email, 'hpo')
    useEffect(() => {
        const form = new FormData()
        form.append('phone_number', props.phone_number)
        // @ts-ignore
        form.append('password', pin)
        if (pin.length === 4) {
            fetch(baseUrl + '/token/', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email_or_phone: props.email,
                    password: pin
                })
            }).then((res) => {
                return res.json()
            }).then(async (res) => {
                console.log(res, 'resssss')
                if (res.access) {
                    dispatch(setUserToken(res.access))
                    await AsyncStorage.setItem('userToken', res.access)
                    console.log(res.access, 333)
                }
            })
        }
    }, [pin])

    return (
        <Container containerProp={{paddingHorizontal: 20}}>
            <View style={{marginTop: 15}}>
                <BackButton onPress={() => {
                    navigation.navigate("Login")
                }}/>
            </View>
            <View>
                <Title titlePropStyle={{marginTop: 25}}>
                    Введите свой номер телефона
                </Title>
                <Text style={{marginTop: 10, color: '#8B8B8B'}}>
                    Мы отправим SMS с кодом подтверждения на ваш ваш номер
                </Text>
            </View>
            <View>
                <View style={styles.pin_input_box}>
                    <View style={styles.pinInput}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            maxLength={1}
                            onChangeText={(pin1: any) => {
                                setPin1(pin1)
                                if (pin1 != '') {
                                    // @ts-ignore
                                    pin2Ref.current.focus()
                                }
                            }}
                        />
                    </View>
                    <View style={styles.pinInput}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            maxLength={1}
                            ref={pin2Ref}
                            onChangeText={(pin2: any) => {
                                setPin2(pin2)
                                if (pin2 != '') {
                                    // @ts-ignore
                                    pin3Ref.current.focus()
                                }
                            }}
                        />
                    </View>
                    <View style={styles.pinInput}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            maxLength={1}
                            ref={pin3Ref}
                            onChangeText={(pin3: any) => {
                                setPin3(pin3)
                                if (pin3 != '') {
                                    // @ts-ignore
                                    pin4Ref.current.focus()
                                }
                            }}
                        />
                    </View>
                    <View style={styles.pinInput}>
                        <TextInput
                            keyboardType="numeric"
                            style={styles.input}
                            maxLength={1}
                            ref={pin4Ref}
                            onChangeText={(pin4: any) => {
                                setPin4(pin4)
                            }}
                        />
                    </View>
                </View>

            </View>
        </Container>
    );
};

export default LoginPin;
const styles = StyleSheet.create({
    pin_input_box: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        left: -10
    },
    pinInput: {
        width: '20%',
        backgroundColor: color2,
        borderRadius: 15,
        height: 47
    },
    input: {
        padding: 15,
        textAlign: 'center'
    }
})
