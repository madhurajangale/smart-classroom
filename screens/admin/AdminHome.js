import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure this package is installed

const AdminHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.logo}>E</Text>
                <View style={styles.profileContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Icon name="person" size={30} color="#ffffff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.mainContent}>
                <View style={styles.overviewContainer}>
                    <View style={styles.rowContainer}>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Total Teachers</Text>
                            <Text style={styles.cardValue}>50</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.cardTitle}>Active Complaints</Text>
                            <Text style={styles.cardValue}>5</Text>
                        </View>
                    </View>
                    
                    <View style={styles.resourceRow}>
                        <TouchableOpacity 
                            style={styles.resourceCard}
                            onPress={() => navigation.navigate('Resources')}
                        >
                            <Icon name="storage" size={30} color="#3a477a" />
                            <Text style={styles.resourceCardTitle}>Resources Data</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.resourceCard}
                            onPress={() => navigation.navigate('AllocateResources')}
                        >
                            <Icon name="add-box" size={30} color="#3a477a" />
                            <Text style={styles.resourceCardTitle}>Add Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.resourceCard}
                            onPress={() => navigation.navigate('ManageResources')}
                        >
                            <Icon name="manage-accounts" size={30} color="#3a477a" />
                            <Text style={styles.resourceCardTitle}>Manage Resources</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.departmentsSection}>
                    <Text style={styles.departmentsTitle}>Departments</Text>
                </View>

                <View style={styles.departmentContainer}>
                    {['IT', 'CS', 'EXTC', 'AIDS'].map(department => (
                        <TouchableOpacity 
                            key={department} 
                            style={styles.departmentCard} 
                            onPress={() => navigation.navigate('DepartmentHome', { department })}
                        >
                            <Text style={styles.departmentText}>{department}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', 
    },
    topBar: {
        height: 60,
        backgroundColor: '#3a477a', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    logo: {
        fontSize: 24,
        color: '#ffffff', 
        fontWeight: 'bold',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verify: {
        marginRight: 15,
    },
    viewAllText: {
        color: '#afdbf5', 
        fontSize: 14,
    },
    mainContent: {
        flex: 1,
        padding: 15,
    },
    overviewContainer: {
        flexDirection: 'column', // Stack cards vertically
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff', 
        padding: 15,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        flexBasis: '48%', 
        marginBottom: 10,
        height: 120,
    },
    cardTitle: {
        fontSize: 16,
        color: '#333333', 
    },
    cardValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3a477a', 
    },
    resourceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resourceCard: {
        backgroundColor: '#afdbf5',
        height: 120, 
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        marginRight: 10,
        flexBasis: '30%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    resourceCardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3a477a', 
        marginTop: 10,
        textAlign: 'center',
    },
    departmentsSection: {
        marginBottom: 20,
    },
    departmentsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3a477a', 
    },
    departmentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    departmentCard: {
        backgroundColor: '#fff',
        height: 120, 
        padding: 15,
        marginBottom: 15,
        marginRight: 10,
        flexBasis: '45%', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    departmentText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3a477a', 
    },
});

export default AdminHome;
