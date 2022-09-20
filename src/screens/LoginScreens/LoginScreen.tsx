import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import PhoneInput from "react-native-phone-input";
import {useNavigation} from "@react-navigation/native";
import {color1, color2} from "../../helpers/colors";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import {baseUrl} from "../../helpers/url";

const LoginScreen = () => {
    const navigation: any = useNavigation();
    const [value, setValue] = useState<string>('')

    function onPressFlag() {
        return false
    }


    async function handleLogin() {
        let form = new FormData;
        form.append('phone_number', value);
        try {
            const response1 = await axios.post(baseUrl + '/send_pin/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response1, 'sended-pin')
            if (response1.status === 200){
                console.log('OK')
                  navigation.navigate('LoginPin',{
                      phone_number: value
                  })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container containerProp={{paddingHorizontal: 20}}>
           <View style={{marginTop: 15}}>
               <BackButton onPress={()=>{navigation.navigate("Welcome")}}/>
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
                <View style={{marginTop: 30}}>
                    <PhoneInput
                        style={styles.phone_input}
                        onPressFlag={onPressFlag}
                        initialValue={'+7'}
                        onChangePhoneNumber={setValue}
                        initialCountry={'us'}
                        textProps={{
                            placeholder: '_ _ _  _ _ _  _ _ _'
                        }}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate("LoginEmail")}} style={{flex: 1}}>
                <Text style={styles.text}>
                    Войти по почте
                </Text>
            </TouchableOpacity>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    buttonStyles={{backgroundColor: '#7454CF'}}
                    title={"Продолжить"}
                    onPress={handleLogin}
                />
            </View>
        </Container>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    phone_input: {
        backgroundColor: color2,
        padding: 15,
        borderRadius: 30
    },
    text:{
        color: color1,
        textDecorationLine: "underline",
        textDecorationColor: color1,
        textDecorationStyle: "solid",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    }
})
