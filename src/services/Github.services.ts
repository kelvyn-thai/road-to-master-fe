import axios from "axios";
import { UserEntity, UserEntitySchema } from "@/schemas/github";

// TODO: inheritance from axios instance and use interceptor to authenticate, authorization, validate schema,...
export class GithubService {
  // TODO: find the way to validate request / response dto
  async getUserInfo(username: string): Promise<UserEntity> {
    const res = await axios.get(`https://api.github.com/users/${username}`);

    return UserEntitySchema.parse(res.data);
  }
}

const githubService = new GithubService();

export default githubService;
