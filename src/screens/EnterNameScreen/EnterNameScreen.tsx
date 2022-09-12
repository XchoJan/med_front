import React, {useState} from 'react';
import Container from "../../components/Container";
import {Text, StyleSheet, View, TextInput, Image, TouchableOpacity} from 'react-native';
import BackButton from "../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import PenIcon from "../../assets/Icons/PenIcon";
import {color1, color2} from "../../helpers/colors";
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';

const EnterNameScreen = () => {
    const navigation: any = useNavigation();
    const [name, setName] = useState<string>('')
    const [image, setImage] = useState<any>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result, 'result');

        if (!result.cancelled) {
            setImage({
                uri: result.uri,
                name: `image${Math.floor(Math.random() * 7000)}.png`,
                type: result.type
            });
        }
    };

    function handlePostName() {
        let form = new FormData()
        form.append('body', JSON.stringify({username: name, phone_number: '+74564865'}))
        form.append('avatar', image)

        fetch('http://137.184.130.229/user/coach/', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: {
                avatar: form,
            }
        }).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res, 'response')
        })
    }

    return (
        <Container containerProp={styles.inlineContainer}>
            <View style={{flex: 1}}>
                <View>
                    <BackButton onPress={() => {
                        navigation.navigate('Welcome')
                    }}/>
                </View>
                <View style={styles.top_box}>
                    <View>
                        <Text style={styles.title}>
                            Добро пожаловать !
                        </Text>
                    </View>
                    <View style={{position: 'relative'}}>
                        <TouchableOpacity onPress={pickImage} style={styles.edit_icon}>
                            <PenIcon/>
                        </TouchableOpacity>
                        <View>
                            {!image ? <Image
                                style={styles.image}
                                source={{uri: 'https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58479.jpg?w=2000'}}
                            /> : <Image
                                style={styles.image}
                                source={{uri: image.uri}}
                            /> }
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={{color: color2}}>
                            Рекомендуем выбрать <Text style={{color: color1}}>реальную фотографию</Text>{"\n"}для более
                            доверительного взаимодействия
                        </Text>
                    </View>
                    <View style={styles.input_box}>
                        <View>
                            <Text style={[styles.title]}>
                                Введите ваше имя
                            </Text>
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={"Имя"}
                                onChangeText={(name: string) => {
                                    setName(name)
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginBottom: 25}}>
                <CustomButton onPress={()=>{navigation.navigate("CreateAccount")}} title={"Продолжить"}/>
            </View>
        </Container>
    );
};
export default EnterNameScreen;
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
    top_box: {
        alignItems: 'center',
        marginTop: 45
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 25
    },
    edit_icon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 20,
        zIndex: 1
    },
    input_box: {
        alignSelf: 'flex-start',
        marginTop: 25,
        width: '100%',
    },
    input: {
        borderRadius: 20,
        backgroundColor: color2,
        padding: 10,
        marginTop: 20

    }
})
