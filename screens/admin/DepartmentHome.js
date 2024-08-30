import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure this package is installed

const DepartmentHome = ({ route, navigation }) => {
    const { department } = route.params; // Get department name from route params

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>{department} Department</Text>
            </View>

            {/* Main Content */}
            <ScrollView contentContainerStyle={styles.mainContent}>
                {/* Timetable Generator */}
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('TimetableGenerator')}>
                    <Icon name="calendar-today" size={30} color="#3a477a" />
                    <Text style={styles.cardTitle}>Timetable Generator</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ClassAllocation')}>
                    <Icon name="class" size={30} color="#3a477a" />
                    <Text style={styles.cardTitle}>Class Allocation Data</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ExamData')}>
                    <Icon name="school" size={30} color="#3a477a" />
                    <Text style={styles.cardTitle}>Exam Data</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DepartmentResources')}>
                    <Icon name="bar-chart" size={30} color="#3a477a" />
                    <Text style={styles.cardTitle}>Students Performance</Text>
                </TouchableOpacity>

                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ffffff', // Main background color
    },
    header: {
        padding: 15,
        backgroundColor: '#3a477a', // Main color
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff', // Main color for text
        fontWeight: 'bold',
    },
    mainContent: {
        padding: 15,
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: '#afdbf5', // Accent color
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3a477a', // Main color for text
        marginLeft: 10,
    },
});

export default DepartmentHome;
