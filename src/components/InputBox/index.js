import { View, Text,StyleSheet,TextInput} from 'react-native'
import { AntDesign,MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* + icons  */}

        <AntDesign name="plus" size={24} color="royalblue"/>
      {/* input box 
       */}
       <TextInput placeholder='Type to send..' style={styles.input}/>

       {/* send icon  */}
       
       <MaterialIcons name ="send" size={24} color="white" style={styles.button}

       />
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'whitesmoke',
        padding:5,
        alignItems:"center",

    },
    input:{
        flex:1,
        fontSize:18,
        padding:5,
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"lightgray",

    },
    button:{
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },
});
export default InputBox