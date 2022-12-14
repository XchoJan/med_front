import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/CustomButton";
import axios from "axios";
import {baseUrl} from "../../../../helpers/url";
import {useNavigation} from "@react-navigation/native";

const LoginWithEmailScreen = (props: any) => {
    const navigation: any = useNavigation();
    const [email, setEmail] = useState('')

   async function handleSendEmail(){
        let form = new FormData()
        form.append('email', email)

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
                    email: email
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleBack(){

    }
    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={()=>{navigation.navigate("CreateAccount")}}/>
            </View>
            <View style={{marginTop: 20}}>
                <Title>
                    Введите свой Email
                </Title>
                <Text style={{color: '#8B8B8B', marginTop: 10}}>
                    Мы отправим письмо с кодом подтверждения на ваш Email
                </Text>
            </View>
            <View style={{flex: 1}}>
                <View style={styles.input}>
                    <TextInput
                        style={{left: 10}}
                        placeholder={"Введите почту"}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    onPress={handleSendEmail}
                    title={"Продолжить"}
                />
            </View>
        </Container>
    );
};

export default LoginWithEmailScreen;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    input: {
        width: '100%',
        borderRadius: 40,
        backgroundColor: '#e5e5e8',
        marginTop: 25,
        padding: 10,
    }
})
