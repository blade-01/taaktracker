export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();

  // Redirect the user to the login page
  if (!user.value) {
    return navigateTo({
      path: "/auth",
      query: {
        redirect: to.fullPath
      }
    });
  }
});
