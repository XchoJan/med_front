import React, {useState} from 'react';
import Container from "../../../../components/Container";
import {Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import BackButton from "../../../../components/BackButton";
import {useNavigation} from "@react-navigation/native";
import PenIcon from "../../../../assets/Icons/PenIcon";
import {color1, color2} from "../../../../helpers/colors";
import CustomButton from "../../../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';
import {useDispatch} from "react-redux";
import {setFormData} from "../../../../store/actions/auth_data";
import Title from "../../../../components/Title";
import ErrorPopUp from "../../../../components/ErrorPopUp";
import {RadioButton} from "react-native-paper";

const EnterNameScreen = () => {
    const navigation: any = useNavigation();
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<any>(null);
    const [role, setRole] = useState('');

    const [nameValid, setNameValid] = useState(true);
    const [imageValid, setImageValid] = useState(true);
    const [roleValid, setRoleValid] = useState(true);

    const dispatch = useDispatch();
    const roles = [
        {name: 'Клиент', role: 'client', key: 1, checked: false},
        {name: 'Коуч', role: 'coach', key: 2, checked: false},
        {name: 'Врач', role: 'doctor', key: 3, checked: false},
    ]
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage({
                uri: result.uri,
                name: `IMG_` + Date.now() + `.JPG`,
                type: result.type + '/jpeg',
                id: Date.now(),
                lastModified: Date.now(),
            });
        }
    };

    function handleSetNameAvatar() {
        if (!name || !image || !roleValid) {
            if (!name) {
                setNameValid(false)
            } else {
                setNameValid(true)
            }
            if (!image) {
                setImageValid(false)
            } else {
                setImageValid(true)
            }
            if (!role) {
                setRoleValid(false)
            } else {
                setRoleValid(true)
            }
            return false
        }
        let form = new FormData()
        form.append('username', name)
        console.log({image})
        form.append('avatar', image)
        dispatch(setFormData(form))
        navigation.navigate('CreateAccount',{
            role: role
        })
    }

    return (
        <Container containerProp={styles.inlineContainer}>
            <View>
                <View style={{marginBottom: 15}}>
                    <BackButton onPress={() => {
                        navigation.navigate('Welcome')
                    }}/>
                </View>
                <ScrollView style={{marginBottom: 50}} showsVerticalScrollIndicator={false}>
                    <View>
                        <View>
                            {!nameValid && <ErrorPopUp error={'Введите имя'}/>}
                            {!imageValid && <ErrorPopUp error={'Добавьте фото'}/>}
                            {!roleValid && <ErrorPopUp error={'Выбирете роль'}/>}
                        </View>
                        <View style={styles.top_box}>
                            <View>
                                <Title>
                                    Добро пожаловать !
                                </Title>
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
                                    />}

                                </View>
                            </View>
                            <View style={{marginTop: 15}}>

                                <Text style={{color: color2}}>
                                    Рекомендуем выбрать <Text style={{color: color1}}>реальную фотографию</Text>{"\n"}для
                                    более
                                    доверительного взаимодействия
                                </Text>
                            </View>
                            <View style={styles.input_box}>
                                <View>
                                    <Title>
                                        Введите ваше имя
                                    </Title>
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
                            <View style={{alignSelf: 'flex-start', marginTop: 20, marginBottom: 15}}>
                                <Title>
                                    Войти как
                                </Title>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: '25%'}}>
                        {roles.map((item) => (
                            <TouchableOpacity key={item.key} onPress={()=>{setRole(item.role)}} style={styles.roleBox}>
                                <Text style={styles.roleItem} key={item.key}>
                                    {item.name}
                                </Text>
                                <Text>
                                    <RadioButton
                                        value="first"
                                        status={role === item.role ? 'checked' : 'unchecked'}
                                        uncheckedColor={color1}
                                        color={color1}
                                    />
                                </Text>
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={{marginBottom: 25}}>
                        <CustomButton onPress={handleSetNameAvatar} title={"Продолжить"}/>
                    </View>
                </ScrollView>
            </View>
        </Container>
    )
        ;
};
export default EnterNameScreen;
const styles = StyleSheet.create({
    inlineContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
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
    },
    roleBox: {
        width: '100%',
        backgroundColor: color2,
        marginBottom: 10,
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    roleItem: {
        top: 7,
        fontSize: 16
    }
})
