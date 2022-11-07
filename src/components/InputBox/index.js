import { View, Text,StyleSheet,TextInput} from 'react-native'
import { AntDesign,MaterialIcons,FontAwesome,Entypo } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* + icons  */}

        {/* <AntDesign name="plus" size={24} color="royalblue"/> */}
        {/* <MaterialIcons name="attach-file" size={28} color="black" /> */}
        <Entypo name="attachment" size={24} color="black"
        style={styles.attachment} />
      {/* input box 
       */}
       <TextInput placeholder='Type to send..' style={styles.input}/>

       {/* send icon  */}
       
       {/* <MaterialIcons name ="send" size={24} color="white" style={styles.button}


       /> */}
       <FontAwesome name="send" size={22} color="black" style={styles.button}/>
       <MaterialIcons name="keyboard-voice" size={30} color="black" style={styles.voice} />
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:6,
        alignItems:"center",

    },
    attachment:{
     cursor:'pointer',
     
    },
    input:{
        flex:1,
        fontSize:17,
        padding:6,
        paddingHorizontal:10,
        marginHorizontal:5,
        borderRadius:20,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"gray",

    },
    button:{
        backgroundColor: "lightgray",
        padding: 8,
        borderRadius: 15,
        overflow: "hidden",
        marginRight:5,
        cursor:'pointer',
    },
    voice:{
      backgroundColor:'lightgray',
      padding:4,
      borderRadius:15,
      overflow:'hidden',
      cursor:'pointer',
    }
});
export default InputBox