import { createApiClient } from "@/shared/api/baseApi";
import { API_BASE_URLS } from "@/shared/config";

const questionShowRequest = createApiClient(API_BASE_URLS.default);

export const questionShowApi = {
  async getById(id) {
    return questionShowRequest(`/questions/${id}`);
  },
};
