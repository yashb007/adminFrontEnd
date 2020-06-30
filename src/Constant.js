module.exports = {
  getAPI: function() {
    return "http://192.168.1.12:3000";
    // return "http://skillgamesacademy.com/skillsbetaTest/ws";
  },
  language_id: function() {
    return "1";
  },
  usermaster_id: function() {
    return "205";
  },
  user_type: function() {
    return "learner";
  },
  domain_code: function() {
    return "skillsacademy";
  },
  default_user_role_id: function() {
    return "3";
  },
  default_course_cat_list_type: function() {
    return "all";
  },
  print: function(data) {
    for (var key of data.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
  }
};
