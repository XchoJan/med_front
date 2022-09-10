import React from 'react';
import {Text, View, StyleSheet, Pressable} from "react-native";
import BackIcon from "../assets/Icons/BackIcon";
import {color1} from "../helpers/colors";

const BackButton = (props: any) => {
    const {onPress} = props
    return (
        <Pressable onPress={onPress} style={styles.back}>
            <View>
                <BackIcon/>
            </View>
            <View>
                <Text style={styles.title}>
                    Назад
                </Text>
            </View>
        </Pressable>
    );
};

export default BackButton;
const styles = StyleSheet.create({
    back:{
        flexDirection: 'row',
        marginTop: 35
    },
    title:{
        color: color1,
        marginLeft: 5
    }
})
