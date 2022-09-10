import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import Doctor from "../../assets/Icons/Doctor";
import CustomButton from "../../components/CustomButton";

const GreetingsScreen = (props: any) => {
    const navigation: any = useNavigation();
    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton onPress={() => {
                    navigation.navigate('CreateAccount')
                }}/>
            </View>
            <View style={styles.title_box}>
                <Text style={styles.title}>
                    Мы вас нашли в списке{"\n"}верифицированных в бадди
                </Text>
                <Text style={{marginTop: 15}}>
                    Здравствуйте, Мещерякова Анна{"\n"}Владимеровна !
                </Text>
            </View>
            <View style={styles.image_box}>
                <Doctor/>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate('Greetings2')}} title={"Продолжить"}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen;
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
        fontWeight: "bold"
    },
    image_box:{
        alignItems: "center",
        marginTop: 52,
        flex: 1
    }
})
