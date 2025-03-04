import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';
import { useAuth } from '../store/authStore';

function LoginScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const navigation = useNavigation();
    const auth = useAuth();

    const [user, setUser] = useState({ email: '', password: '' });

    function handleName(val) {
        setUser((prev) => ({ ...prev, email: val }));
    }

    function handlePass(val) {
        setUser((prev) => ({ ...prev, password: val }));
    }

    const onSubmit = () => {
       auth.login(user,navigation)
           
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
                        placeholderTextColor="#888"
                        onBlur={onBlur}
                        onChangeText={(val) => { 
                            onChange(val);
                            handleName(val);
                        }}
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
                        placeholderTextColor="#888"
                        secureTextEntry
                        onBlur={onBlur}
                        onChangeText={(val) => { 
                            onChange(val);
                            handlePass(val);
                        }}
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
                presslogin={()=> navigation.navigate('signup')}
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
        paddingTop: 50,
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
