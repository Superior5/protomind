export const useDataStore = defineStore('DataStore', {
   state: () => ({
      isOpen: false,
      tokenAuth: null,
      userInfo: null,
      protocols: [],
      preloader: false
   }),

   actions: {
   },
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}