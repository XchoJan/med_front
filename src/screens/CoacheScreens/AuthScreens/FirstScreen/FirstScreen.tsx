import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList, Pressable} from "react-native";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import Container from "../../../../components/Container";
import {color1} from "../../../../helpers/colors";
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomButton from "../../../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const FirstScreen: React.FC = (props) => {
    const slides = [
        {key: 1, title: 'Health Buddy', description: 'Сервис наставников по восстановлению и сохранению здоровья.'},
        {key: 2, title: 'Программы для клиентов', description: 'Отслеживаем динамику назначений через цифровой аватар по всем параметрам организма'},
        {key: 3, title: 'Постоянная база клиентов', description: 'Зарегистрируй профиль врача  и получай быстрый доступ к базе знаний и клиентов'},
    ]
    const navigation: any = useNavigation();

    const RenderItem = (item: any) => {
        return (
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image
                    style={styles.image}
                    source={require('../../../../assets/images/doctor.png')}/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.line}/>
                <AppIntroSlider
                    data={slides}
                    renderItem={(data) => RenderItem(data.item)}
                    activeDotStyle={{backgroundColor: color1}}
                    dotClickEnabled={false}
                />
                <View style={{marginBottom: 35}}>
                    <Pressable style={styles.skipBtn} onPress={()=>{navigation.navigate("Welcome")}}>
                        <Text style={styles.skipBtnTitle}>
                            Пропустить
                        </Text>
                    </Pressable>
                    <View style={{marginHorizontal: 25}}>
                        <CustomButton title={'Далее'}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FirstScreen;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: '100%'
    },
    image: {
        width: '100%',
    },
    wrapper: {
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
    },
    title: {
        textAlign: "center",
        color: color1,
        fontSize: 22
    },
    description: {
        textAlign: "center",
        paddingHorizontal: 55,
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 15
    },
    line:{
        width: 48,
        height: 1,
        backgroundColor: '#E2E4E7',
        alignSelf: 'center',
        marginVertical: 20
    },
    skipBtn:{
        textAlign: "center",
        alignItems: "center",
        marginBottom: 15
    },
    skipBtnTitle:{
        marginTop: 35,
        color: color1,
        fontWeight: 'bold'
    }
})
