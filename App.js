import React, { Component } from "react";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import Repos from "./screens/Repos";
import Followers from "./screens/Followers";
import Following from "./screens/Following";

const token = "43d97013b5511d3d64db35ee05eb0f0aa91517e0";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
  },

});

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Repos" component={Repos} />
            <Stack.Screen name="Following" component={Following} />
            <Stack.Screen name="Followers" component={Followers} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}
