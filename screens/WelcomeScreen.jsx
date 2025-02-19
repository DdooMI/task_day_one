import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <TextComponent image='https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg' title='Welcome' subtitle='Create an account and access our awesome services' />
            <ButtonComponent  title='Getting Started' subtitle='Already have an account? Log in'/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        flexGrow: 1,
        backgroundColor: 'white',

        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bottom: {
        position: 'absolute',
        bottom: 50
    },

    button: {
        backgroundColor: '#7E57C2',
        paddingVertical: 15,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    linkText: {
        marginTop: 10,
        color: '#7E57C2',
        fontSize: 14,
    },
});

export default WelcomeScreen;
