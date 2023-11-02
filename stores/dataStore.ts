export const useDataStore = defineStore('DataStore', {
   state: () => ({
      isOpen: false,
      tokenAuth: null,
      userInfo: {
         name: 'Мохаммед-Али',
         lastName: 'Дасаев',
         jobTitle: 'Менеджер'
      }
   }),

   actions: {
   },
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}