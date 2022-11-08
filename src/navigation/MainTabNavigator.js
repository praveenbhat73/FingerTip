
import {View} from 'react-native';
import NotImplementedScreen from '../screens/NotImplementedScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatsScreen from '../screens/ChatsScreen';
import {Ionicons,Entypo} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();
const MainTabNavigator=()=>{
    return (
        <>
        <Tab.Navigator initialRouteName='chats'
        screenOptions={{
         tabBarStyle: { backgroundColor: "lightgray" },
        headerStyle: { backgroundColor: "lightgray",},

         }}
        >
        <Tab.Screen name="Status" component={NotImplementedScreen}
       options={{
         tabBarIcon: ({ color, size,focused }) => (
        <Ionicons name="logo-whatsapp" size={size} color={ focused ? "blue" : "black"} />
         ),
        }}
         />
        <Tab.Screen name="Calls" component={NotImplementedScreen} 
               options={{
         tabBarIcon: ({ color, size,focused }) => (
         <Ionicons name="call-outline" size={size} color={ focused ? "blue" : "black"} />
         ),
         }}
        />
        <Tab.Screen name="Camera" component={NotImplementedScreen} 
               options={{
        tabBarIcon: ({ color, size,focused }) => (
        <Ionicons name="camera-outline" size={size} color={ focused ? "blue" : "black"} />

        ),
        }}
        />
        <Tab.Screen name="Chats" component={ChatsScreen} 
               options={{
        tabBarIcon: ({ color, size,focused }) => (
        <Ionicons name="ios-chatbubbles-sharp" size={size} color={ focused ? "blue" : "black"} />

        ),
        headerRight: (color,size,focused) => (
  <Entypo
    name="new-message"
    size={18}
    color={focused ? "royalblue":"black"}
    style={{ marginRight: 25 }}
  />
),
        }}
        />
        <Tab.Screen name="Settings" component={NotImplementedScreen} 
               options={{
        tabBarIcon: ({ color, size,focused }) => (
        <Ionicons name="settings-outline" size={size} color={ focused ? "blue" : "black"} />
        ),
        }}
        />
        </Tab.Navigator>

        </>
    )
}

export default MainTabNavigator;