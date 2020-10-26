const { default: Profile } = require("../models/profile");

it("model test", () => {
  const profile = new Profile({
    name: "test",
    avatarUrl: "https://test/test.png",
    login: "user",
    websiteUrl: "unknown",
    bio: "work hard!",
    email: "test@tests.com",
    repositories: {
      totalCount: 85,
    },
    followers: {
      totalCount: 17,
    },
    following: {
      totalCount: 73,
    },
  });
  expect(profile.nickname).toBe("test");
  expect(profile.username).toBe("user");
  expect(profile.email).toBe("test@tests.com");
  expect(profile.bio).toBe("work hard!");
  expect(profile.avatarUrl).toBe("https://test/test.png");
  expect(profile.websiteUrl).toBe("unknown");
  expect(profile.repositoriesCount).toBe(85);
  expect(profile.followersCount).toBe(17);
  expect(profile.followingCount).toBe(73);
});
