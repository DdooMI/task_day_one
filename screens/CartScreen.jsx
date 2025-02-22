import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '../zustand/useCart';

function CartScreen() {
    const cart = useCart();

    return (
        <View>
            <SafeAreaView>
                <FlatList
                    data={cart.cart}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={{ uri: item.thumbnail }} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <View style={styles.counterContainer}>
                                <TouchableOpacity
                                    style={styles.counterButton}
                                    onPress={() => {
                                        cart.dec(item.id)
                                    }}>
                                    <Text style={styles.counterButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity ?? 1}</Text>
                                <TouchableOpacity
                                    style={styles.counterButton}
                                    onPress={() => cart.inc(item.id)}>
                                    <Text style={styles.counterButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    counterButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    counterButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default CartScreen;
