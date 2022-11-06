import { View,Text,StyleSheet } from 'react-native'
import React from 'react';

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Message=({message})=>{
    const isMessage=()=>{
        return message.user.id==='u1'
    }
    return (
        <>
           <View style={[styles.container,
           {
            backgroundColor: isMessage() ? '#DCF8C5': 'white',
            alignSelf: isMessage() ? 'flex-end' : 'flex-start',
           } 
           ]
           }
           >
            <Text >
                {
                    message.text
                }
            </Text>
            <Text style={styles.time}>
            {dayjs(message.createdAt).fromNow(true)}
            </Text>
           </View>
        </>
    );
}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'white',
        // alignSelf:'flex-start',
        margin:3,
        padding:10,
        // borderRadius:11,
        borderTopRightRadius: '12px',
        borderBottomRightRadius:'12px',
        borderBottomLeftRadius:'12px',

        borderTopLeftRadius: '',
         maxwidth:'80%',
         position:'relative',
    
    },
   
    time:{
        color:'gray',
        alignSelf:'flex-end',
    }
})

export default Message;