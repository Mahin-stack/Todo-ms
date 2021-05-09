import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Alert } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    if(task !== ''){
      setTaskItems([...taskItems, task])
      setTask('');
    }
    else{
      Alert.alert('Pls Add The Task First')
    }
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todo List..</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add Your Todos !'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
        }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95a5a6',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#f2f1ef',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'f2f1ef',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'f2f1ef',
    borderWidth: 1,
  },
  addText: {
    color:'#f2f1ef'
  },
});