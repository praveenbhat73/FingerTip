import {FlatList} from 'react-native';
import chats from '../../assets/data/chats.json'
import ChatListItem from '../components/ChatListItem';

//using flatlist inorder to render many number of datas
const ChatsScreen=()=>{
   return (
       <>
       {/* flatlist always has two properties one is data and another is renderitem 
       in render item its passed as props
        */}
           <FlatList 
               data={chats}
               renderItem={
                   (
                       {item}
                   )=><ChatListItem chat={item}/>
               }
           />
       </>
   )
}
export default ChatsScreen;