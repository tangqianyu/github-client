import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useQuery, gql } from '@apollo/client';
import RepoComponent from "../components/repo";
import { ScrollView } from "react-native";

const ALL_REPOS_QUERY = gql`
  query {
    viewer {
      repositories(last: 100) {
        nodes {
          name
          description
          owner {
            login
          }
        }
      }
    }
  }
`;


const Repo = () => {
  const { loading, error, data } = useQuery(ALL_REPOS_QUERY);
  if (loading) return (
    <View>
      <Text>Loading...</Text>
    </View>)

  return (
    <ScrollView style={styles.container}>
      {!loading &&
        data.viewer.repositories.nodes.map((repo, index) => (
          <RepoComponent repo={repo} key={index} />
        ))}
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 26,
  },
  repoContainer: {
    height: 200,
    width: "100%",
  },
});

export default Repo;
