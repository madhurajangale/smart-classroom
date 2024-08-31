import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AdminHome from '../screens/admin/AdminHome';
import Alerts from '../screens/admin/Alerts';
import AcadCalendar from '../screens/admin/AcadCalendar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'AdminHome') {
          iconName = 'home';
        } else if (route.name === 'AcadCalendar') {
          iconName = 'calendar-today';
        }  else if (route.name === 'Alerts') {
          iconName = 'report';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#3a477a' },
    })}
  >
    <Tab.Screen name="AdminHome" component={AdminHome} />
    <Tab.Screen name="AcadCalendar" component={AcadCalendar} />
    <Tab.Screen name="Alerts" component={Alerts} />
  </Tab.Navigator>
);

export default TabNavigator;
