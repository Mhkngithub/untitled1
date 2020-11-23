$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DriverAccsessVehicleFleet.feature");
formatter.feature({
  "name": "As a truck driver ı should be able to accsess Vehicle under Fleet tab",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"driver\" login with valid userName and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.login_with_valid_userName_and_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Driver navigate vehicle under fleet tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SC2"
    }
  ]
});
formatter.step({
  "name": "user on \"Dashboard\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.user_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "driver clic \"Fleet\" tab and \"Vehicles\" module",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.driver_clic_tab_and_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "should be see all vehicle information on page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.should_be_see_all_vehicle_information_on_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});