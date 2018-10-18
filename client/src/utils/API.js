import axios from "axios";

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  isLoggedIn: function() {
    return axios.get("/api/users/isLoggedIn");
  }
};