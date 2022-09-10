import React from 'react';
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {View, Text, StyleSheet} from "react-native";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const GreetingsScreen3 = () => {
    const navigation: any = useNavigation();
    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={()=>{navigation.navigate('Greetings2')}}/>
            </View>
            <View style={{marginTop: 25}}>
                <Text style={styles.title}>
                    Ваш план на ближайшую неделю:
                </Text>
                <Text>
                    -Знакомство с продуктом{"\n"}
                    {"\n"}
                    -Обучение по продукту с методологом Ольгой Ивановой{"\n"}
                    {"\n"}
                    -Знакомство с командой и тестовое задание
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Пройти путь клиента:
                </Text>
                <Text>
                    - Первичный контакт с клиентом -видео + тестовое задание{"\n"}
                    {"\n"}
                    -с Ольгой Ивановой обсудите мотивацию, загруженность и график, методолог и руководитель всех Health
                    Buddy.{"\n"}
                    {"\n"}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.title}>
                    Cозвон с клиентом:
                </Text>
                <Text>
                    -Коучинговые методики: мастермаинд с коллегами и тьютором (тестовое задание){"\n"}
                    {"\n"}
                    -Постановка целей и задач , долгосрочное ведение клиента (тестовое задание){"\n"}
                    {"\n"}
                </Text>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate('Greetings4')}} title={"Продолжить"}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen3;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
})
