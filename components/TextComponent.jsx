import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function TextComponent(props) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>


    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
      },
      image: {
        width: 150,
        height: 150,
        marginBottom: 15,
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginTop: 5,
      },
})
export default TextComponent