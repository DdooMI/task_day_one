import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color="#388E3C" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.editButton}>
                <MaterialIcons name="edit" size={24} color="#388E3C" />
            </TouchableOpacity>


            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' }}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Johan Smith</Text>
                <Text style={styles.location}>California, USA</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statText}>Balance</Text>
                        <Text style={styles.statText}>00.00</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statText}>Orders</Text>
                        <Text style={styles.statText}>10</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statText}>Total Spent</Text>
                        <Text style={styles.statText}>100</Text>
                    </View>
                </View>
            </View>


            <View style={styles.menu}>
                {[
                    { title: 'Personal Information', icon: 'person' },
                    { title: 'Your Orders', icon: 'shopping-cart' },
                    { title: 'Your Favourites', icon: 'favorite' },
                    { title: 'Payment', icon: 'payment' },
                    { title: 'Recommended Shops', icon: 'store' },
                    { title: 'Nearest Shop', icon: 'location-on' },
                    { title: 'Logout', icon: 'logout' },
                ].map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <MaterialIcons name={item.icon} size={24} color="#4CAF50" />
                            <Text style={styles.menuText}>{item.title}</Text>
                        </View>

                        <MaterialIcons name='arrow-forward-ios' size={20} color="#777" />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    profileHeader: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    location: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    statBox: {
        color: 'white',
        alignItems: 'center',
        backgroundColor: '#388E3C',
        padding: 10,
        borderRadius: 10,
        minWidth: 90,
    },
    statText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    menu: {
      
        borderRadius: 10,
        paddingVertical: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    menuText: {
        fontSize: 16,
        marginLeft: 15,
        color: '#333',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        borderColor: '#388E3C',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
    editButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 10,
        borderColor: '#388E3C',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5
    },
})

export default ProfileScreen