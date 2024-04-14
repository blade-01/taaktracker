export default () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();
  const isLoading = ref<boolean>(false);
  async function signInWithGoogle(params?: any) {
    isLoading.value = true;
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google"
      });
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    } finally {
      isLoading.value = false;
    }
  }
  async function signInWithEmail(params?: any) {
    // isLoading.value = true;
    // const { error, data } = await supabase.auth
    //   .signInWithOtp({
    //     email: params.email
    //   })
    //   .finally(() => {
    //     isLoading.value = false;
    //   });
    // if (error) console.log(error);
  }
  async function signOut() {
    try {
      isLoading.value = true;
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      user.value = null;
      navigateTo("/auth");
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    } finally {
      isLoading.value = false;
    }
  }
  return { signInWithGoogle, signInWithEmail, signOut, isLoading, user };
};
