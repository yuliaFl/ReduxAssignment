import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TextInput,
    NativeModules,
  } from "react-native";
import { useState, useEffect} from "react";
import { connect } from 'react-redux'
import { load } from '../redux/actions/factload'
import { addname, deletename } from '../redux/actions/nameadd'

const Name = ({ names, addname, deletename }) => {
    const[title, setTitle]= useState('');

const handleAdd = event => {
    event.preventDefault();
    addname(title)
};
const handleDelete = id => {
    deletename(id)
};

return (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Enter Cat Name"
      value={title}
      onChangeText={(t) => setTitle(t)}
    />
<br/>
    <Button title={'add me'} onPress={handleAdd} color="orange"/>
    
    <br/>
    <FlatList
      keyExtractor={(item) => item.id}
      data={names}
      renderItem={({ item }) => <div><Text>{item.name}</Text> <Button title={'delete'} onPress={() => handleDelete(item.id)}></Button></div>}
    />
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 10
    },
    input: {
      textAlign: "center",
      height: 40,
      width: "90%",
      borderWidth: 1,
      borderColor: "orange",
      borderRadius: 7,
      marginTop: 12,
    },
    userList: { alignContent: "stretch", width: "100%" },
    item: {
      borderWidth: 1,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },itemText: { color: "orange" },
  });  

  const mapStateToProps = state => ({
    names: state.appstore.names
  });
  
const mapDispatchToProps = { addname, deletename};

export default connect(mapStateToProps, mapDispatchToProps)(Name);