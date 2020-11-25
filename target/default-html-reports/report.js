$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/StoreManagerCreateVehicle.feature");
formatter.feature({
  "name": "As a store manager and Sales managerI should be able to create Vehicle",
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
  "name": "Store Manager login with valid credantial",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.SimpleLoginStepDefs.store_Manager_login_with_valid_credantial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Store Manager see Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.SimpleLoginStepDefs.store_Manager_see_Dashboard_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Loading...]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.vytrackGrup21.step_definitions.SimpleLoginStepDefs.store_Manager_see_Dashboard_page(SimpleLoginStepDefs.java:74)\r\n\tat ✽.Store Manager see Dashboard page(file:///C:/Users/greec/untitled1/src/test/resources/features/StoreManagerCreateVehicle.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "store manager should create and cancel and delete car",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sc3"
    }
  ]
});
formatter.step({
  "name": "\"store manager\" press \"Fleet\" tab \"Vehicles\" module should be see all information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.press_tab_module_should_be_see_all_information(java.lang.String,java.lang.String,java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Store manager should be able to create and cancel car",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_create_and_cancel_car()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Store manager should be able to add Vehicle Module and Vehicle Make",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_add_Vehicle_Module_and_Vehicle_Make()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Store manager should be able to edit or delete the car",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_edit_or_delete_the_car()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});