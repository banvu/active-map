<template>
  <!-- <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            class="mx-auto mb-6"
            width="120"
            :src="
              require('@/assets/logo.png')"
          />
        </router-link>
        <v-card
          width="460"
        >
          <v-card-text class="text-center px-12 py-16">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <v-form
                ref="form"
                @submit.prevent="signUp"
              >
                <div class="text-h4 font-weight-black mb-10">
                  회원가입
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="이메일"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호"
                  :rules="{
                    required: true,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호 확인"
                  :rules="{
                    confirmed: '비밀번호',
                  }"
                >
                  <v-text-field
                    v-model="passwordConfirm"
                    label="비밀번호 확인"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6"
                  type="submit"
                  block
                  x-large
                  rounded
                  color="primary"
                  :disabled="invalid"
                >
                  가입하기
                </v-btn>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form" class="blue--text">
        <v-card-text>
          <v-text-field
            ref="email"
            name="email"
            v-model="email"
            autofocus
            browser-autocomplete="email"
            :rules="[() => !!email || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            placeholder="john@doe.com"
            required
            color="blue darken-2"
          ></v-text-field>
          <v-text-field
            ref="name"
            name="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Full Name"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="address"
            v-model="address"
            :rules="[
              () => !!address || 'This field is required',
              () =>
                (!!address && address.length <= 25) ||
                'Address must be less than 25 characters',
              addressCheck,
            ]"
            label="Address Line"
            placeholder="Snowy Rock Pl"
            counter="25"
            required
          ></v-text-field>
          <v-text-field
            ref="city"
            v-model="city"
            :rules="[() => !!city || 'This field is required', addressCheck]"
            label="City"
            placeholder="El Paso"
            required
          ></v-text-field>
          <v-text-field
            ref="state"
            v-model="state"
            :rules="[() => !!state || 'This field is required']"
            label="State/Province/Region"
            required
            placeholder="TX"
          ></v-text-field>
          <v-text-field
            ref="zip"
            v-model="zip"
            :rules="[() => !!zip || 'This field is required']"
            label="ZIP / Postal Code"
            required
            placeholder="79938"
          ></v-text-field>
          <v-autocomplete
            ref="country"
            v-model="country"
            :rules="[() => !!country || 'This field is required']"
            :items="countries"
            label="Country"
            placeholder="Select..."
            required
            browser-autocomplete="on"
          ></v-autocomplete>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <template v-slot:activator="{ on }">
                <v-btn icon class="my-0" @click="resetForm" v-on="on">
                  <v-icon>refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "SignUp",
  // data: () => ({
  //   email: null,
  //   password: null,
  //   passwordConfirm: null,
  // }),
  // methods: {
  //   async signUp() {
  //     const result = await this.$refs.observer.validate();
  //     if (result) {
  //       alert("로그인 로직~");
  //     }
  //   },
  // },
  data: () => ({
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Timor L'Este",
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    errorMessages: "",
    email: null,
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    formHasErrors: false,
  }),

  // computed: {
  //   form() {
  //     return {
  //       name: this.name,
  //       address: this.address,
  //       city: this.city,
  //       state: this.state,
  //       zip: this.zip,
  //       country: this.country,
  //     };
  //   },
  // },

  // watch: {
  //   name() {
  //     this.errorMessages = "";
  //   },
  // },

  // methods: {
  //   addressCheck() {
  //     this.errorMessages =
  //       this.address && !this.name ? "Hey! I'm required" : "";

  //     return true;
  //   },
  //   resetForm() {
  //     this.errorMessages = [];
  //     this.formHasErrors = false;

  //     Object.keys(this.form).forEach((f) => {
  //       this.$refs[f].reset();
  //     });
  //   },
  //   submit() {
  //     this.formHasErrors = false;

  //     Object.keys(this.form).forEach((f) => {
  //       if (!this.form[f]) this.formHasErrors = true;

  //       this.$refs[f].validate(true);
  //     });
  //   },
  // },
};
</script>
<style lang=""></style>
