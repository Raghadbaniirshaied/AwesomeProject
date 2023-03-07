import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default function App() {
const [people, setpeople] = useState([
  { name: 'shaun', key:'1'},
  { name: 'raghad', key:'2'},
  { name: 'yoshi', key:'3'},
  { name: 'mario', key:'4'},
  { name: 'luigi', key:'5'},
  { name: 'peach', key:'6'},
  { name: 'suzi', key:'7'},
  
]);




  return (
    <View style={styles.container}>

      {people.map( (item)=> {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>

        )

      })}
     
     </View>
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
 
});



