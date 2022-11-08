import { View,Text,ImageBackground,StyleSheet,FlatList,KeyboardAvoidingView } from "react-native";
import Message from "../components/Message";

import messages from '../../assets/data/messages.json'
import bg from '../../assets/images/BG.png'
import InputBox from "../components/InputBox";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
// native special component to display image in background and remaining in top of it 
// its ImageBackground and remaining acts as child component and stays above it 
// const image = { uri: "https://i.pinimg.com/736x/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg" };
const ChatScreen=()=>{
    const navigation=useNavigation();
    const route=useRoute();
    useEffect(()=>{

        navigation.setOptions({title: route.params.name});
        // useeffect should be used to render the above updated params 
        // because its called inside defualt function useeffect calls only once 
    },[route.params])
    var Platform=""
    return (
<>
<KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >
<ImageBackground  source={bg} style={styles.bg}>
    <FlatList
    data={messages}
    renderItem={({item})=> <Message message={item}/>}
    style={styles.list}
    inverted
    />
    <InputBox/>
   
</ImageBackground>
</KeyboardAvoidingView>
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