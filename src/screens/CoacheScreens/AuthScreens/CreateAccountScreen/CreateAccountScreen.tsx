import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import Container from "../../../../components/Container";
import BackButton from "../../../../components/BackButton";
import PhoneInput from 'react-native-phone-input'
import CustomButton from "../../../../components/CustomButton";
import {color1, color2} from "../../../../helpers/colors";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import axios from "axios";
import Title from "../../../../components/Title";
import {baseUrl} from "../../../../helpers/url";

const CreateAccountScreen = (props: any) => {
    console.log(props.role, 'props-role')
    const navigation: any = useNavigation();
    const [value, setValue] = useState<string>('')

    function onPressFlag() {
        return false
    }

    let form = useSelector((store: any) => store.auth_data.formData)

    async function handleSetPhoneNumber() {
        let phoneForm = new FormData;
        phoneForm.append('phone_number', value);
        form.append('phone_number', value);
        try {
            const response = await axios.post(baseUrl + '/' + props.role + '/', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
            console.log(response, 'ыыыыыыыыыыыыы')
        } catch (error) {
            console.log(error)
        }
        try {
            const response1 = await axios.post(baseUrl + '/send_pin/', phoneForm, {
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
        <Container containerProp={styles.inline_container}>
            <View style={{flex: 1}}>
                <View>
                    <BackButton onPress={() => {
                        navigation.navigate("EnterName")
                    }}/>
                </View>
                <View>
                    <Title titlePropStyle={{marginTop: 25}}>
                        Введите свой телефон
                    </Title>
                    <View style={{marginBottom: 15}}>
                        <Text style={styles.set_sms}>
                            Мы отправим SMS с кодом подтверждения на {"\n"}Ваш новый номер
                        </Text>
                    </View>
                </View>
                <View>
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
               <TouchableOpacity
                   activeOpacity={0.6}
                   style={{alignItems: 'center', marginTop: 15}}
                   onPress={()=>{navigation.navigate('EmailReg', {role: props.role})}}
               >
                   <Text style={styles.email_reg}>
                       Либо вы можете зарегистрироваться по{"\n"}почте
                   </Text>
               </TouchableOpacity>

            </View>
            <View style={styles.button_box}>
                <CustomButton
                    disabled={value.length < 5}
                    title={'Продолжить'}
                    buttonStyles={{backgroundColor: value.length < 5 ? '#C6B1FF' : color1}}
                    onPress={handleSetPhoneNumber}
                />
            </View>
        </Container>
    );
};

export default CreateAccountScreen;
const styles = StyleSheet.create({
    inline_container: {
        paddingHorizontal: 25,
        paddingTop: 35
    },
    new_number: {
        color: '#BCBCBC',
        paddingTop: 10,
        fontSize: 16,
        marginVertical: 15
    },
    set_sms: {
        color: '#BCBCBC',
        marginTop: 20,
        fontSize: 16,
    },
    phone_input: {
        backgroundColor: color2,
        padding: 15,
        borderRadius: 30
    },
    button_box: {
        marginBottom: 15
    },
    email_reg:{
        textDecorationLine: "underline",
        textDecorationColor: '#7454CF',
        color: '#7454CF',
        textAlign: "center"
    }
})
