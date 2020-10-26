export default class Profile {
    username;
    nickname;
    avatarUrl;
    websiteUrl;
    email;
    bio;
    repositoriesCount;
    followersCount;
    followingCount;
    constructor(data) {
        this.username = data.login;
        this.nickname = data.name;
        this.avatarUrl = data.avatarUrl;
        this.websiteUrl = data.websiteUrl;
        this.email = data.email;
        this.bio = data.bio;
        this.repositoriesCount = data.repositories.totalCount;
        this.followersCount = data.followers.totalCount;
        this.followingCount = data.following.totalCount;
    }
}