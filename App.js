/*
Yulia Flenova
Cat Life 
Version 1.6 (6 previous tries to get it to where it is)
*/
import React, { useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import store from "./redux/store";
import Facts from "./components/Facts";
import Name from "./components/Name";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <h3> Planning on getting a cat? Make a list of names you like, and find out some interesting facts about cats
      </h3>

      <Button
        title="Name List"
        onPress={() => navigation.navigate("Name List")}
        color="orange"
      />
      <br />
      <Button
        title="Facts"
        onPress={() => navigation.navigate("Fact")}
        color="orange"
      />
    </View>
  );
}
function CatNameScreen({ navigation }) {
  return(
      <Name/>
  );
}

function FactScreen({ navigation }) {
return( 
    <Facts/>
  );
}

function MyStack() {
  return (
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Name List" component={CatNameScreen} />
      <Stack.Screen name="Fact" component={FactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
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

