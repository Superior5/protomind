export default defineNuxtRouteMiddleware((to, from) => {
  const state = useDataStore();

  if (to.href != '/auth' && !state.tokenAuth) {
    const cookieToken = useCookie('tokenAuth')
    if (cookieToken.value) {
      state.tokenAuth = cookieToken.value;
    } else {
      return navigateTo('/auth');
    }
  }
});