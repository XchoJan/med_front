import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import PhoneInput from 'react-native-phone-input'
import CustomButton from "../../components/CustomButton";
import {color1, color2} from "../../helpers/colors";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {setFormData} from "../../store/actions/auth_data";
import axios from "axios";

const CreateAccountScreen = () => {
    const dispatch = useDispatch();
    const navigation: any = useNavigation();
    const [value, setValue] = useState<string>('')

    function onPressFlag() {
        return false
    }

    let form = useSelector((store: any) => store.auth_data.formData)

    async function handleSetPhoneNumber() {
        form.append('phone_number', value)
        dispatch(setFormData(form));
        console.log(form)
        await fetch('http://137.184.130.229/user/coach/', {
            method: 'post',
            body: form
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'response')
            if (res.id){
                navigation.navigate('PinCode');
            }
        }).catch(function (error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        });
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
                    <Text style={styles.phoneNumber}>
                        Введите свой телефон
                    </Text>
                    <Text style={styles.new_number}>
                        Новый номер
                    </Text>
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
                <View>
                    <Text style={styles.set_sms}>
                        Мы отправим SMS с кодом подтверждения на {"\n"}Ваш новый номер
                    </Text>
                </View>
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
    phoneNumber: {
        fontWeight: "bold",
        marginTop: 25,
        fontSize: 22
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
        borderRadius: 15
    },
    button_box: {
        marginBottom: 15
    }
})
