<template>
  <v-container fluid class="background fill-height fill-width">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card class="selected" width="500" dark :elevation="5" ref="form">
          <v-card-text sm8 md4 class="text-center px-12 py-16">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form ref="form" @submit.prevent="signIn">
                <div class="text-h4 font-weight-black mb-10 white--text">
                  LOGIN
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="Email"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    name="email"
                    v-model="email"
                    label="Email"
                    ref="email"
                    browser-autocomplete="email"
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                    autocomplete="new"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="Password"
                    browser-autocomplete="email"
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                    autocomplete="new-password"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6"
                  type="submit"
                  block
                  x-large
                  rounded
                  color="selected"
                  :disabled="invalid"
                  to="/"
                >
                  Login
                </v-btn>
                <div class="mt-5">
                  <!-- Reusable Component -->
                  <!-- <router-link
                    class="text-decoration-none"
                    to="/"
                  >
                    Home
                  </router-link> | -->
                  <v-card-actions>
                    <v-checkbox
                      color="#FFFFFF"
                      label="Remember me"
                    ></v-checkbox>
                    <v-spacer></v-spacer>
                    No Account?
                    <router-link class="text-decoration-none pl-2" to="/">
                      Sign Up
                    </router-link>
                  </v-card-actions>
                </div>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SignIn",
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    signIn() {
      this.$refs.observer.validate().then((result) => {
        if (result) {
          alert("This is warning message!!!");
        }
      });
    },
  },
};
</script>
<style lang="css">
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important;
}
</style>
