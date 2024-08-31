// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/Signup';
import TabNavigator from './TabNavigator'; 
import ProfileScreen from '../screens/ProfileScreen'; 
import SubjectClick from '../screens/Subject'; 
import AllSubjects from "../screens/AllSubjects";
import Role from '../screens/role';
import AdminHome from '../screens/admin/AdminHome';
import DepartmentHome from '../screens/admin/DepartmentHome';
import AdminTabs from './AdminTabs.js'


const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'exp://localhost:19000'],
  config: {
    screens: {
      Login: 'login',
      CheckTimetable: 'checktimetable',
      DashboardScreen: 'dashboardScreen',
      AdminHome: 'adminhome',
      ComplaintsScreen: 'complaintsScreen',
      Profile: 'profile', 
      SubjectClick: 'subjectClick', 
      AllSubjects: 'allSubjects', 
      DepartmentHome: 'departmentHome',
    },
  },
};

const AppNavigator = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ title: 'Signup' }} 
      />
      <Stack.Screen 
        name="Role" 
        component={Role} 
        options={{ title: 'Role' }} 
      />

      <Stack.Screen 
        name="AdminTabs" 
        component={AdminTabs} 
        options={{ title: 'AdminTabs' }} 
      />
      <Stack.Screen 
        name="Tabs" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
      <Stack.Screen 
        name="SubjectClick" 
        component={SubjectClick} 
        options={{ title: 'Subject Details' }}
      />
      <Stack.Screen 
        name="AllSubjects" 
        component={AllSubjects} 
        options={{ title: 'All Subjects' }} 
      />
      <Stack.Screen 
        name="DepartmentHome" 
        component={DepartmentHome} 
        options={{ title: 'Department Home' }} 
      />
      
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
