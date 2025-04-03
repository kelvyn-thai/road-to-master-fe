import { GetListRequest } from "@/schemas/common";

export interface GetProjectListRequest extends GetListRequest {
  q?: string;
}
