import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart } from '../zustand/useCart';
import { useProducts } from '../zustand/useProducts';
const ProductScreen = () => {
    
    const product = useProducts();
    const cart = useCart();
    const nav = useNavigation();
    useEffect(() => {
        product.load();
    }, []);

    const handleAddToCart = (product) => {
        cart.addToCart(product)
        console.log(cart.cart.length)
        };
       const  goCart = ()=>{
        nav.navigate('cart');
       }
    return (
        <View > 
            <SafeAreaView>
            <View style={styles.appBar}>
                <Text style={styles.appBarTitle}>Cart</Text>
                <TouchableOpacity style={styles.appBarButton} onPress={()=>goCart()} >
                <Ionicons name='cart' size='30' color='black' />
                </TouchableOpacity>
            </View>
            <FlatList
                data={product.products}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(item)}>
                            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        height: 60,
        backgroundColor: '#6200ea',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    appBarTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    appBarButton: {
        backgroundColor: '#03dac6',
        padding: 10,
        borderRadius: 5,
    },
    appBarButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    container: {
        marginTop: 30,
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10
      },
      addToCartButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
      }
    
});

export default ProductScreen;