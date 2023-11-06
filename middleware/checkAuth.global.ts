import { jwtDecode } from "jwt-decode";
export default defineNuxtRouteMiddleware((to, from) => {
  const state = useDataStore();

  if (!state.tokenAuth) {
    const cookieToken = useCookie('tokenAuth')
    if (cookieToken.value) {
      state.tokenAuth = cookieToken.value;
      state.userInfo = jwtDecode(state.tokenAuth)
    }
  }

  if (to.href != '/auth' && !state.tokenAuth) return navigateTo('/auth')

  if ((to.href == '/auth' && state.tokenAuth) || to.href == '/') {
    if (state.userInfo.role != 'ADMIN') {
      return navigateTo('/protocols')
    } else {
      return navigateTo('/lk')
    }
  }

  if (to.href == '/lk' && state.userInfo.role != 'ADMIN') return navigateTo('/protocols')

  // if (to.href != '/auth' && !state.tokenAuth) {
  //   const cookieToken = useCookie('tokenAuth')
  //   if (cookieToken.value) {
  //     state.tokenAuth = cookieToken.value;
  //   } else {
  //     return navigateTo('/auth');
  //   }
  // }

  // if (to.href == '/lk') {
  //   const cookieToken = useCookie('tokenAuth')
  //   if (cookieToken.value) {
  //     state.tokenAuth = cookieToken.value;

  //     console.log(jwtDecode(state.tokenAuth));
  //   }
  // }
});