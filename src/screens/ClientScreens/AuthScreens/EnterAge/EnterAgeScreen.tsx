import React, {useCallback, useState} from 'react';
import {View, Text, Platform, Button, TouchableOpacity} from "react-native";
import ClientContainer from "../../ClientScreenComponents/ClientContainer";
import {Title} from "react-native-paper";
import StatusBar from "../../ClientScreenComponents/StatusBar";
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomButton from "../../../../components/CustomButton";
import moment, {Moment} from "moment";
import NumberPlease from 'react-native-number-please';

const EnterAgeScreen = () => {
    const navigation: any = useNavigation();
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const format2 = "YYYY.MM.DD"
    let date1 = moment(date).format(format2);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        console.log(selectedDate, 'currentDate')
    };

    const showMode = (currentMode: string) => {
        if (Platform.OS === 'android') {
            setShow(false);
            setDate(date)
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    return (
        <ClientContainer>
            <View>
                <BackButton onPress={() => {
                    navigation.navigate('EnterSex')
                }}/>
            </View>
            <View style={{width: '100%'}}>
                <View style={{alignItems: 'center'}}>
                    <Title>
                        2 из 4
                    </Title>
                </View>
                <StatusBar activeWidth={{width: '50%'}}/>
            </View>
            <View style={{marginVertical: 25, alignItems: 'center'}}>
                <Title>
                    Ваш возраст
                </Title>
                <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 28}}>
                    {/*{date1}*/}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={()=>{setShow(!show)}}>
                    <Text>
                        Изменить возраст
                    </Text>
                </TouchableOpacity>
                {show && <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    onChange={onChange}

                    display={Platform.OS === 'android' ? 'calendar' : 'spinner'}
                />}
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton
                    title={'Продолжить'}
                    onPress={()=>{navigation.navigate("EnterWeight")}}
                />
            </View>
        </ClientContainer>
    );
};

export default EnterAgeScreen;
