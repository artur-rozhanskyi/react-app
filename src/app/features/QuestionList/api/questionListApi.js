import { createApiClient } from "@/shared/api/baseApi";
import { API_BASE_URLS } from "@/shared/config";

const questionListRequest = createApiClient(API_BASE_URLS.default);

export const questionListApi = {
  async getAll() {
    return questionListRequest("/questions");
  },
};
