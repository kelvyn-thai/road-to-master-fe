import { faker } from "@faker-js/faker";
import { v4 } from "uuid";
import {
  GetProjectListRequest,
  GetProjectListResponseSchema,
  GetProjectListResponse,
} from "@/schemas";
import { delay } from "@/utils";

export default class ProjectService {
  // TODO: find the way to validate request / response dto
  async getProjectList(
    reqPayload: GetProjectListRequest,
  ): Promise<GetProjectListResponse> {
    console.debug({ reqPayload });
    await delay(1000);
    const size = 4;
    const res: GetProjectListResponse = {
      total: size,
      data: [...Array(size)].map((_, index) => ({
        id: v4(),
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        shortDescription: faker.lorem.sentence(),
        imageURL: `/photo${index + 1}.webp`,
      })),
    };

    return GetProjectListResponseSchema.parse(res);
  }
}

export const projectService = new ProjectService();
