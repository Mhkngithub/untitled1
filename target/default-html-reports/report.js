$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FleetCostPage.feature");
formatter.feature({
  "name": "As a truck driver I should be able to access Vehicle Costs page",
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
  "name": "Driver login with valid credantial",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.SimpleLoginStepDefs.driver_login_with_valid_credantial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Driver Should see Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.SimpleLoginStepDefs.driver_Should_see_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Fleet Tag Cost Module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sc5"
    }
  ]
});
formatter.step({
  "name": "\"driver\" log in page titles must be seen",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.FleetCostPageStepDefs.log_in_page_titles_must_be_seen(java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[[type, total price, date]]\u003e but was:\u003c[[]]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.vytrackGrup21.step_definitions.FleetCostPageStepDefs.log_in_page_titles_must_be_seen(FleetCostPageStepDefs.java:38)\r\n\tat ✽.\"driver\" log in page titles must be seen(file:///C:/Users/greec/untitled1/src/test/resources/features/FleetCostPage.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "fourth line should include these informations",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.FleetCostPageStepDefs.fourth_line_should_include_these_informations(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should invoke page informations",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.FleetCostPageStepDefs.user_should_invoke_page_informations()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});