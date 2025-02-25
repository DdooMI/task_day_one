import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';

function LoginScreen() {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm();
    const nav = useNavigation();
    const onSubmit = (data) => {
        nav.navigate('product');
        console.log(data);
    };

    return (
        <View style={styles.container}>
            <TextComponent 
                image='https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo='
                title='Log In Now' 
                subtitle='Please log in to continue' 
            />
            
            <Controller
                control={control}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

            <Controller
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long'
                    }
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
                defaultValue=""
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            <ButtonComponent 
                title='Log In' 
                subtitle='Do not have an account? Sign up' 
                press={handleSubmit(onSubmit)}
            />
        </View>
    );
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
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
});

export default LoginScreen;