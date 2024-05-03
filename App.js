import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';

import Contacts from "./src/pages/Contacts";
import Information from "./src/pages/Information";
import AppContacts from "./src/pages/AppContacts";

// const drawer = createDrawerNavigator(); //menu hamburguer e também lateral, que também é exibido ao arrastar a tela para a lateral
const stack = createStackNavigator();
const tab = createBottomTabNavigator();

function Tabs() {
  return(
    <tab.Navigator screenOptions={{ headerShown: false }}>
      <tab.Screen
        name="AppContacts"
        component={AppContacts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="contacts" size={size} color={color} />          ),
        }}
      />
      <tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="perm-contact-cal" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  )
}


export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Contacts" component={Tabs} />
        <stack.Screen name="Information" component={Information} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
