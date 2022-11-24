const state = {
  drawer: false,
  gradient: "rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)",
  items: [
    { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
    // { title: 'Pages', icon: 'mdi-menu', items: [
    {
      title: "Authentication",
      icon: "mdi-login",
      items: [
        { title: "SignIn", to: "/authentication/sign-in" },
        // { title: "SignUp", to: "/authentication/sign-up" },
      ],
    },
    //   { title: 'ProductList', to: '/page/product-list' },
    // ]},

    {
      title: "Data Analytics",
      icon: "mdi-google-analytics",
      to: "/data-analytics",
    },
    {
      title: "Real Time map",
      icon: "mdi-map-marker-radius",
      to: "/real-time-map",
    },
    // { title: 'Sum Air', icon: 'mdi-airballoon', items: [
    //   { title: 'IoT Core', to: '/sum-air/iot-core' },
    //   { title: 'Sum Air', to: '/sum-air/sum-air' },
    // ] },
    // { title: 'Project-testing', icon: 'mdi-airballoon', to: '/sum-air/sum-air' },

    // { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
    {
      title: "Tables-Testing Field",
      icon: "mdi-table-settings",
      items: [
        { title: "Basic Table", to: "/tables/basic-table" },
        { title: "App Table", to: "/tables/app-table" },
        // { title: "Line Chart", to: "/tables/line-chart" },
      ],
    },
    // { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
  ],
};

const getters = {
  getDrawer: (state) => state.drawer,
};

const mutations = {
  setDrawer(state, data) {
    state.drawer = data;
  },
};

const actions = {
  toggleDrawer({ commit }, value) {
    commit("setDrawer", value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
