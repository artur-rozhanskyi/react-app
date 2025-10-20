import { runInAction } from "mobx";
import { authApi } from "../api";

export const createAuthStore = () => {
  const store = {
    isLoading: false,
    error: null,
    user: null,

    logout() {
      this.user = null;
    },

    loginByEmail: async ({ email, password }) => {
      store.isLoading = true;
      try {
        const res = await authApi.login({ email, password });
        console.log(res);
        runInAction(() => {
          store.user = res;
        });
      } catch (e) {
        console.log(e);
      } finally {
        runInAction(() => {
          store.isLoading = false;
        });
      }
    },
  };
  return store;
};
