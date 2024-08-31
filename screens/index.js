import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions  } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={[styles.halfOval, { width }]} />
      <Image 
        source={require('../assets/LOGO.png')} 
        style={styles.title}
      />
      {/* Image */}
      <Image 
        source={require('../assets/welcome.png')} 
        style={styles.image}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Role')}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText} >LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
  },
  title: {
    width: 161,
    height:80,
    marginBottom: 50,
    marginTop: 30,
    color: '#3A477A', 
  },
  image: {
    width: 350, 
    height: 350,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  registerButton: {
    backgroundColor: '#3A477A', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 18,
    color: '#3A477A', 
  },
  halfOval: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3A477A',
    height: 60, 
    borderBottomLeftRadius: 50, 
    borderBottomRightRadius: 50, 
  },
});

export default WelcomeScreen;
