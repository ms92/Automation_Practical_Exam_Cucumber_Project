$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Webpage.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios webelement functionality validation",
  "description": "",
  "id": "techfios-webelement-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@WebelementFeature"
    }
  ]
});
formatter.before({
  "duration": 5814343546,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios page",
  "keyword": "Given "
});
formatter.match({
  "location": "Webelement_Step_Defn.user_is_on_the_TechFios_page()"
});
formatter.result({
  "duration": 622964820,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "varify Set_skyBlue_Background and Set_White_Background buttons exists",
  "description": "",
  "id": "techfios-webelement-functionality-validation;varify-set-skyblue-background-and-set-white-background-buttons-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on first button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on second button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "Webelement_Step_Defn.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 2099203863,
  "status": "passed"
});
formatter.match({
  "location": "Webelement_Step_Defn.I_click_on_first_button()"
});
formatter.result({
  "duration": 77944001,
  "status": "passed"
});
formatter.match({
  "location": "Webelement_Step_Defn.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 56734919,
  "status": "passed"
});
formatter.match({
  "location": "Webelement_Step_Defn.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 76057105,
  "status": "passed"
});
formatter.match({
  "location": "Webelement_Step_Defn.I_click_on_second_button()"
});
formatter.result({
  "duration": 62634373,
  "status": "passed"
});
formatter.match({
  "location": "Webelement_Step_Defn.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 4053271737,
  "status": "passed"
});
formatter.after({
  "duration": 1080020506,
  "status": "passed"
});
});