export const useDataStore = defineStore('DataStore', {
   state: () => ({
      isOpen: false,
   }),

   actions: {
   },


});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}