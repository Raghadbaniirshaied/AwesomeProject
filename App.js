import React,{useState} from 'react';
import { StyleSheet, Text, View ,TextInput, FlatList,TouchableOpacity} from 'react-native';

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

const pressHandler = (id) => {
  console.log(id);
  setPeople((prevPeople) => {
    return prevPeople.filter(person => person.id !=id)

  })
}


  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        date={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
          
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          
        )}
        />
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



