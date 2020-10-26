const { default: Repo } = require("../models/repo");
import RepoComponent from '../components/repo'
import renderer from 'react-test-renderer';
import React from 'react';

it("model test", () => {
  const repo = new Repo({
    name: "hello",
    description: "world",
    owner: { login: "test" },
  });
  expect(repo.name).toBe("hello");
  expect(repo.description).toBe("world");
  expect(repo.username).toBe("test");

});

test('renders correctly', () => {
  const repo = {
    name: "hello",
    description: "world",
    owner: { login: "test" },
  };
  const tree = renderer.create(<RepoComponent repo={repo} />).toJSON();
  expect(tree).toMatchSnapshot();
});



