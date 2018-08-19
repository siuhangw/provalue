/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from "react";
import * as React from "react";
import { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList,
  Dimensions,
  StatusBar
} from "react-native";

import { NavigationComponentProps } from "react-native-navigation";

import result from "../data/user.json";

interface IHomeProps extends NavigationComponentProps {}

// type Props = {};
export default class Home extends Component<IHomeProps> {
  // constructor(props: IHomeProps) {
  //   super(props);

  //   this.state = {
  //     page: 1,
  //     seed: 1,
  //     data: [
  //       {
  //         id: "afsdvsdvs",
  //         name: "Peter",
  //         email: "peter@peter.com",
  //         description: "Hello World, I am Peter."
  //       },
  //       {
  //         id: "siojongf",
  //         name: "Peter",
  //         email: "peter@peter.com",
  //         description: "Hello World, I am Peter."
  //       }
  //     ]
  //   };
  // }

  state = {
    page: 1,
    seed: 1,
    data: [
      {
        id: "afsdvsdvs",
        name: "Peter",
        email: "peter@peter.com",
        description: "Hello World, I am Peter."
      },
      {
        id: "siojongf",
        name: "Peter",
        email: "peter@peter.com",
        description: "Hello World, I am Peter."
      }
    ]
  };

  // componentDidMount() {
  //   this.makeRemoteRequest();
  // }

  // makeRemoteRequest = () => {
  //   const { page, seed } = this.state;
  //   const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         data: page === 1 ? res.results : [...this.state.data, ...res.results],
  //         error: res.error || null,
  //         loading: false,
  //         refreshing: false
  //       });
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
          hidden={true}
        />
        <View style={styles.homePanel} />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigator.switchToTab({
                  tabIndex: 1 // Here is the tab index
                })
              }
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

console.log("Result: " + JSON.stringify(result));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  homePanel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "beige"
  },
  item: {
    fontSize: 20,
    textAlign: "left",
    padding: 20,
    backgroundColor: "azure",
    width: Dimensions.get("window").width
  }
});
