export default class Repo {
  name;
  username;
  description;
  constructor(data) {
    this.name = data.name;
    this.username = data.owner.login;
    this.description = data.description;
  }
}
