import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import RepoModel from "../models/repo";

export default class ModalPopUp extends Component {
  state = {
    modalVisible: false,
    text: null,
    postedText: [],
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const repo = new RepoModel(this.props.repo);
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View>
            <Text>Repo Name: </Text>
          </View>
          <View>
            <Text>{repo.name}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Owner Name: </Text>
          <Text>{repo.username}</Text>
        </View>
        <View style={styles.section}>
          <Text>Description: </Text>
          <Text>{repo.description}</Text>
        </View>
      </View>
    );
  }
}

// onPress = () => {
//   // after adding an input for the repo notes, store the input value here:
//   // https://jsonplaceholder.typicode.com/
//   // sounds like a post request
//   // https://github.com/invertase/react-native-firebase-starter
// };

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderBottomColor: "#333",
    borderWidth: 1,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  text: {
    paddingVertical: 20,
    fontSize: 18,
  },
  textInput: {
    height: 40,
    width: "75%",
    backgroundColor: "white",
  },
  repoText: {
    fontSize: 18,
    color: "#808080",
  },
});
