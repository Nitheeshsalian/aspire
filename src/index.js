// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen import
import { HomeScreen } from './components/home';
import { DebitCardScreen } from './components/debitCard/debitCardScreen';
import { PaymentScreen } from './components/paymentScreen';
import { CreditScreen } from './components/creditScreen';
import { ProfileScreen } from './components/profileScreen';
import { SpendingLimit } from './components/debitCard/spendingLimit'

//Icons import
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowRightArrowLeft';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons/faCircleArrowUp';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function DebitCardStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Debit Card" component={DebitCardScreen} />
      <HomeStack.Screen name="SpendingLimit" component={SpendingLimit} />
    </HomeStack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#01d167',
          tabBarInactiveTintColor: 'gray',
        })}
        initialRouteName="DebitCardHome"
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="DebitCardHome"
          component={DebitCardStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCreditCard} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faArrowRightArrowLeft} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Credit"
          component={CreditScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faCircleArrowUp} color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
