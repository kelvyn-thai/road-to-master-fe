import { UserEntity, UserEntitySchema } from "@/schemas/github";
// TODO: inheritance from axios instance and use interceptor to authenticate, authorization, validate schema,...
export class GithubService {
  // TODO: find the way to validate request / response dto
  async getUserInfo(username: string): Promise<UserEntity> {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
      next: { tags: [username], revalidate: 3600 }, // 1 hour cache
    }).then((res) => res.json());

    return UserEntitySchema.parse(res);
  }
}

const githubService = new GithubService();

export default githubService;
