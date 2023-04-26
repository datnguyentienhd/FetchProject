import * as React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home/HomeScreen';
import NotiScreen from './src/screens/noti/NotiScreen';
import PaymentScreen from './src/screens/payment/PaymentScreen';
import InforScreen from './src/screens/infor/InforScreen';
import DetailScreen from './src/screens/home/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: {
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#E2E2EA'
          }
        }}>
          <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/images/home-icon.png')}
                  style={{ width: 32, height: 32 }}
                />
              ),
              tabBarLabel: () => null,
            }}
          />
          <Tab.Screen
            name="Notification"
            component={NotiScreen}
            options={{
              tabBarIcon: () => (
                <View>
                  <Image
                    source={require('./assets/images/noti-icon.png')}
                    style={{ width: 30, height: 32.82 }}
                  />
                  <View style={{
                    backgroundColor: '#FC5A5A',
                    width: 12,
                    height: 12,
                    position: 'absolute',
                    right: 0,
                    borderRadius: 10
                  }}/>
                </View>
              ),
              tabBarLabel: () => null,
            }}
          />
          <Tab.Screen
            name="Payment"
            component={PaymentScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/images/payment-icon.png')}
                  style={{ width: 40, height: 27 }}
                />
              ),
              tabBarLabel: () => null,
            }}
          />  
          <Tab.Screen
            name="Information"
            component={InforScreen}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/images/infor-icon.png')}
                  style={{ width: 26, height: 32 }}
                />
              ),
              tabBarLabel: () => null,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
