import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';
// import ChatListItem from './src/components/ChatListItem';
//breakdown whole component into small parts
//appbar
//bottombar
//chatlistitem
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
// const chat = {
//   id: "1",
//   user: {
//     image:
//       "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
//     name: "Lukas",
//   },
//   lastMessage: {
//     text: "Oke",
//     createdAt: "07:30",
//   },
// };


export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
      <ChatListItem chat={chat}/>
       */}
       {/* <ChatsScreen/> */}
       {/* <ChatScreen/> */}
       <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingVertical:50,
    justifyContent: 'center',
  },
});
