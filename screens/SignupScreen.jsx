import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';
function SignupScreen() {
    
    return (
        <View style={styles.container}>
            <TextComponent image='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=' title='Sign Up Now' subtitle='Please fill the details to create an account' />
            <TextInput style={styles.input} placeholder="Full Name"/>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <ButtonComponent title='Sign Up' subtitle='Already have an account? Log in'/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        flexGrow: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height:'70',
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ddd',
       
    },

});
export default SignupScreen