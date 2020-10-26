import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useQuery, gql } from '@apollo/client';
import Profile from "../models/profile";

export const PROFILE_QUERY = gql`
  query {
    viewer {
      name
      avatarUrl
      login
      websiteUrl
      bio
      email
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;

export const Home = ({ navigation }) => {
  const { loading, error, data } = useQuery(PROFILE_QUERY);
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const profile = new Profile(data.viewer);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{profile.username}'s GitHub !</Text>
      <Image
        style={styles.avatar}
        source={{
          uri: profile.avatarUrl,
        }}
      />
      <View>
        <Text>Name</Text>
        <Text>{profile.nickname}</Text>
      </View>
      <View>
        <Text>Bio</Text>
        <Text>{profile.bio}</Text>
      </View>
      <View>
        <Text>Email</Text>
        <Text>{profile.email}</Text>
      </View>
      <View>
        <Text>website</Text>
        <Text>{profile.websiteUrl}</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.section}
          onPress={() => {
            navigation.navigate("Repos");
          }}
        >
          <Text>Repositories</Text>
          <Text>{profile.repositoriesCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Followers");
          }}
        >
          <Text>Followers</Text>
          <Text>{profile.followersCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Following");
          }}
        >
          <Text>Following</Text>
          <Text>{profile.followingCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  header: {
    fontWeight: "bold",
    fontSize: 26,
  },
  repoContainer: {
    height: 200,
    width: "100%",
  },
  bottom: {
    height: 100,
    flexDirection: "row",
    width: "100%",
  },
  section: {
    flex: 1,
  },
});


