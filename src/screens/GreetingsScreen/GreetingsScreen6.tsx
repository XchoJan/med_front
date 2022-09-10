import React, {useRef} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import {Video} from "expo-av";
import {color2} from "../../helpers/colors";
import CustomButton from "../../components/CustomButton";

const GreetingsScreen6 = () => {
    const navigation: any = useNavigation();
    const video = useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <BackButton  onPress={()=>{navigation.navigate('Greetings5')}}/>
            </View>
            <View>
                <Text style={styles.title_h3}>
                    Теперь переходим к знакомству с клиентом
                </Text>
                <Text>
                    Видео о пути клиента от старшего сервис-менеджера Александрой Щербаковой
                </Text>
            </View>
            <View style={styles.video_box}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                    useNativeControls
                    resizeMode={"contain"}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            <View style={{flex: 1}}>
                <View>
                    <Text style={styles.title_h3}>
                        Задание
                    </Text>
                    <Text>
                        выписать чек-лист первичной консультации (основные пункты для коммуникации с клиентом)
                    </Text>
                </View>
                <View style={styles.input_box}>
                    <TextInput placeholder={'Написать'}/>
                </View>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate("Greetings7")}} title={'Продолжить'}/>
            </View>
        </Container>
    );
};

export default GreetingsScreen6;

const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 35
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
    video_box: {
        borderRadius: 10
    },
    video: {
        width: '100%',
        height: 250,
        marginVertical: 15,
        borderRadius: 10
    },
    input_box: {
        backgroundColor: color2,
        padding: 10,
        borderRadius: 15,
        marginVertical: 15,
    },
})