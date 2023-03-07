import axios from "axios";

const githubBaseUrl = "";
const githubApis = {
  getRepoByUserName: (userName: string) =>
    axios.get(`https://api.github.com/users/${userName}/repos`),
};

export default githubApis;
