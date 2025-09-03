import { createApiClient } from "../../../shared/api/baseApi";
import { API_BASE_URLS } from "../../../shared/config";

const authRequest = createApiClient(API_BASE_URLS.auth);

export const authApi = {
  async login({ email, password }) {
    return authRequest("/oauth/token", {
      method: "POST",
      body: JSON.stringify({ email, password, grant_type: "password" }),
    });
  },
};
