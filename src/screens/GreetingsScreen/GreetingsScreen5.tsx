import React from 'react';
import {View, StyleSheet, Text, ScrollView, TextInput} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {color1, color2} from "../../helpers/colors";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const GreetingsScreen5 = () => {
    const navigation: any = useNavigation();

    return (
        <Container containerProp={styles.inlineContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <BackButton  onPress={()=>{navigation.navigate('Greetings4')}}/>
                </View>
                <View style={{marginTop: 15}}>
                    <Text style={styles.title}>
                        Зарегистрируй профиль наставника
                    </Text>
                    <Text>
                        Для первичного знакомства с клиентом- это
                        повысит доверие к тебе, как к специалисту
                        (можем зашить сразу при регистрации)
                    </Text>
                    <Text style={styles.title_h3}>
                        Краткое БИО о себе
                    </Text>
                </View>
                <View style={styles.input_box}>
                    <TextInput placeholder={'Написать'}/>
                </View>
                <View>
                    <View>
                        <Text style={styles.title_h3}>
                            Информация о образовании
                        </Text>
                        <Text>
                            Загрузите файла формата <Text style={{color: color1, fontWeight: 'bold'}}>PDF, JPG,
                            PNG</Text>
                        </Text>
                        <View style={styles.button_box}>
                            <CustomButton buttonStyles={{borderRadius: 10}} title={"Загрузить файл"}/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title_h3}>
                            Резюме
                        </Text>
                        <Text>
                            Загрузите файла формата <Text style={{color: color1, fontWeight: 'bold'}}>PDF, JPG,
                            PNG</Text>
                        </Text>
                        <View style={styles.button_box}>
                            <CustomButton buttonStyles={{borderRadius: 10}} title={"Загрузить файл"}/>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title_h3}>
                            Ваше фото в белой рубашке
                        </Text>
                        <Text>
                            Загрузите файла формата <Text style={{color: color1, fontWeight: 'bold'}}>PDF, JPG,
                            PNG</Text>
                        </Text>
                        <View style={styles.button_box}>
                            <CustomButton buttonStyles={{borderRadius: 10}} title={"Загрузить файл"}/>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.title_h3}>
                        Напиши пять тезисов , которые отличают нас от конкурентов
                    </Text>
                    <View style={styles.input_box}>
                        <TextInput placeholder={'Написать'}/>
                    </View>
                </View>
                <View style={{marginVertical: 25}}>
                    <CustomButton onPress={()=>{navigation.navigate('Greetings6')}} title={"Продолжить"}/>
                </View>
            </ScrollView>
        </Container>
    );
};

export default GreetingsScreen5;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
    },
    title_box: {
        marginTop: 25
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
    input_box: {
        backgroundColor: color2,
        padding: 10,
        borderRadius: 15
    },
    button_box: {
        marginVertical: 15
    }
})
