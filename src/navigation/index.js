import {View,Text} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "../screens/ChatScreen";
import ChatsScreen from '../screens/ChatsScreen';
// Native Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
import MainTabNavigator from './MainTabNavigator';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer
    >
     
     <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'lightgray',}}}>
     <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown:false}}
      
     />
        {/* <Stack.Screen name="chats" component={ChatsScreen}
        /> */}
        <Stack.Screen name="chat" component={ChatScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;