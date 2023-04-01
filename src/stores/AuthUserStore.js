import { defineStore } from "pinia";
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "hosanabarcelos",
    };
  },
  actions: {
    githubProfile() {
      window.open(`https://github.com/${this.username}`, "_blank");
    },
  },
});