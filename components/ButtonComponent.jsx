import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function ButtonComponent(props) {
  return (
     <View style={styles.bottom}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>{props.title}</Text>
                    </TouchableOpacity>
                    <Text style={styles.linkText}>{props.subtitle}</Text>
                </View>
  )
}
const styles = StyleSheet.create({
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
export default ButtonComponent