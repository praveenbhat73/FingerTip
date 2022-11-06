import { View,Text,ImageBackground,StyleSheet,FlatList } from "react-native";
import Message from "../components/Message";

import messages from '../../assets/data/messages.json'
import bg from '../../assets/images/BG.png'

// native special component to display image in background and remaining in top of it 
// its ImageBackground and remaining acts as child component and stays above it 
const ChatScreen=()=>{
    return (
<>
<ImageBackground source={bg} style={styles.bg}>
    <FlatList
    data={messages}
    renderItem={({item})=> <Message message={item}/>}
    style={styles.list}
    inverted
    />

   
</ImageBackground>
</>
    );
}

const styles=StyleSheet.create({
    bg:{
        flex:1,
        
    },
    list:{
       padding:10, 
    }
})


export default ChatScreen;