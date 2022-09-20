import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import Title from "../../components/Title";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import {useSelector} from "react-redux";
import {baseUrl} from "../../helpers/url";
import {useNavigation} from "@react-navigation/native";

const EmailRegistration = () => {
    const navigation: any = useNavigation();
    let form = useSelector((store: any) => store.auth_data.formData)
    console.log(form, 'form')
    const [email, sendEmail] = useState('')

   async function handleSendEmail() {
       let phoneForm = new FormData;
       phoneForm.append('email', email);
       form.append('email', email);
        try {
            const response = await axios.post(baseUrl + '/coach/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response.data, '4444')
        } catch (error) {
            console.log(error)
        }
        try {
            const response1 = await axios.post(baseUrl + '/send_pin/', phoneForm,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response1, 'sended-pin')
            if (response1.status === 200){
                navigation.navigate('PinCode')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton/>
            </View>
            <View style={{marginTop: 25}}>
                <Title>
                    Введите свой Email
                </Title>
                <Text style={{marginTop: 20, color: '#8B8B8B'}}>
                    Мы отправим письмо с кодом подтверждения на ваш Email
                </Text>
            </View>
            <View style={{flex: 1}}>
                <View style={styles.input}>
                    <TextInput
                        style={{left: 10}}
                        placeholder={"Введите почту"}
                        onChangeText={sendEmail}
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

export default EmailRegistration;


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
