import {Text,View,Image,StyleSheet,Pressable} from 'react-native'

// Day.js package converts into relative date and time 
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
//chats ui(list of chats)
//chats ui which renders users chats dynamically->which renders different data
//list of chats which provides information about the message,photo
//keep direction flex row for each chat 
//chat list in column
//right side photo
//then name in the top
//and last message
//have one main component and two chilren -> import view which can render mulitiple child componets
//two child components are ->photo and another has text in it.
//text has children-> one name and another message
//only some message and name should be seen so use numberofLines property 
//send the all information by props {data that is received from outside world}->to fetch dynamically

import { useNavigation } from '@react-navigation/native';
const ChatListItem=({chat})=>{
    const navigation=useNavigation();
    return(
        <>
           <Pressable onPress={()=>navigation.navigate('chat',{id:chat.id,name:chat.user.name})} style={styles.container}>
           <Image source={{uri: chat.user.image}} style={styles.image}/>
           {/* text is the inbuilt class in react native used to render the styling component and text .
           A React component for displaying text.
             Text supports nesting, styling, and touch handling */}
             <View style={styles.content}>
             <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1}>
                    {chat.user.name}
                </Text>
                <Text style={styles.subTitle}>
                   {dayjs(chat.lastMessage.createdAt).fromNow(true)}
                </Text>
                </View>
                <Text style={styles.subTitle} numberOfLines={1}>
                    {chat.lastMessage.text}
                </Text>    
             </View>
             </Pressable>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        //makes in one row
        marginHorizontal:10,
        marginVertical:5,
        // make margin vertical half of horizontal because it takes all side 
        height:70,
    // height is  static height which renders only some line of text 
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:'lightgray'
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
        //half of height and width
        marginRight:10,
    },
    content:{
        flex:1,
        //takes remainig row length
       
       
    },
    row:{
        flexDirection:'row',
        marginBottom:5,

    },
    name:{
        flex:1,
        fontWeight:'bold',
        fontSize:14.5,
        // color:'blue',
        fontFamily:'sans-serif-condensed'

    },
    subTitle:{
        color:'gray',
        fontSize:13.5,
        fontFamily:'serif'
        // fontFamily:'sans-serif'
    },

})
export default ChatListItem;