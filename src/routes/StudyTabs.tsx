import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { View } from 'react-native';
import TeacherList from '../pages/TeacherList';
import Favourites from '../pages/Favourites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs(){
    return (
        <Navigator
         tabBarOptions={{
             style: {
                 elevation: 0,
                 shadowOpacity: 0,
                 height: 64,
             },
             tabStyle: {
                 flexDirection: 'row',
                 alignItems: 'center',
                 justifyContent: 'center',
             },
             iconStyle: {
                 flex: 0,
                 width: 20,
                 height: 20,
             },
             labelStyle: {
                 fontFamily: 'Archivo_700Bold',
                 fontSize: 13,
                 marginLeft: 16,
             },
             inactiveBackgroundColor: '#fafafc',
             activeBackgroundColor: '#ebebf5',
             inactiveTintColor: '#c1bcccc',
             activeTintColor: '#32264d',
         }}
        >
            <Screen
             name="TeacherList"
             component={TeacherList}
             options={{
                 tabBarLabel: 'Proffys',
                 tabBarIcon: ({ color, size, focused }) => {
                     return (
                        <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                     );
                 }
             }}
            />
            <Screen
             name="Favourites"
             component={Favourites}
             options={{
                tabBarLabel: 'Favourites',
                tabBarIcon: ({ color, size, focused }) => {
                    return (
                       <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                    );
                }
            }}
            />
        </Navigator>
    )
}

export default StudyTabs;