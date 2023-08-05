export const useDataStore = defineStore('DataStore', {
   state: () => ({
      count: 1,
   }),

   actions: {
   },


});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}