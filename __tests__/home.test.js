import { MockedProvider } from '@apollo/client/testing';
import React from 'react'
import { Home } from '../screens/Home'
import renderer from 'react-test-renderer';
import { PROFILE_QUERY } from '../screens/Home'


// it('should render loading state initially', () => {
//   const component = renderer.create(
//     <MockedProvider mocks={[]}>
//       <Home />
//     </MockedProvider>
//   );

//   const tree = component.toJSON();
//   expect(tree).toMatchInlineSnapshot(`
// <View
//   style={
//     Object {
//       "alignItems": "center",
//       "flex": 1,
//       "justifyContent": "center",
//         }
//   }
//   >
//   <Text>
//     Loading...
//   </Text>
// </View>`);
// });


it('should render Home', async () => {
  const profileMock = {
    request: {
      query: PROFILE_QUERY,
    },
    result: {
      data: {
        viewer: {
          __typename: "User",
          avatarUrl: "testAvatar",
          bio: "work hard!",
          email: "mengqiang.q@gmail.com",
          followers: {
            __typename: "FollowerConnection",
            totalCount: 17,
          },
          following: {
            __typename: "FollowingConnection",
            totalCount: 73,
          },
          login: "menq",
          name: "For177",
          repositories: {
            __typename: "RepositoryConnection",
            totalCount: 89,
          },
          websiteUrl: "testUrl",
        },
      }
    },
  };
  const wrapper = renderer.create(
    <MockedProvider mocks={[profileMock]}>
      <Home />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve, 0))

  /* toMatchSnapshot don't always work,it seems a bug */
  expect(wrapper.children).toMatchSnapshot()
});

