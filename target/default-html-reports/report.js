$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FleetOdometer.feature");
formatter.feature({
  "name": "As an authorized user I should be access to Vehicle odometer page.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a\u003cuserType\u003e should be able to access",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc4"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "\"\u003cuserType\u003e\" login with valid \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user should be able to login \"Dashboard\" page",
  "keyword": "Then "
});
formatter.step({
  "name": "Only valid userType  can access to vehicle odometer page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType",
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "driver",
        "user169",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "store_manager",
        "storemanager213",
        "UserUser123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As adriver should be able to access",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc4"
    }
  ]
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
  "name": "\"driver\" login with valid \"user169\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.login_with_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.the_user_should_be_able_to_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Only valid userType  can access to vehicle odometer page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.FleetOdometerStepDefs.only_valid_userType_can_access_to_vehicle_odometer_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Vehicle Odometer - Entities - System - Car - Entities - System]\u003e but was:\u003c[Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.vytrackGrup21.step_definitions.FleetOdometerStepDefs.only_valid_userType_can_access_to_vehicle_odometer_page(FleetOdometerStepDefs.java:23)\r\n\tat ✽.Only valid userType  can access to vehicle odometer page(file:///C:/Users/greec/untitled1/src/test/resources/features/FleetOdometer.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As astore_manager should be able to access",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc4"
    }
  ]
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
  "name": "\"store_manager\" login with valid \"storemanager213\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.login_with_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.the_user_should_be_able_to_login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Only valid userType  can access to vehicle odometer page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.FleetOdometerStepDefs.only_valid_userType_can_access_to_vehicle_odometer_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Vehicle Odometer - Entities - System - Car - Entities - System]\u003e but was:\u003c[Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.vytrackGrup21.step_definitions.FleetOdometerStepDefs.only_valid_userType_can_access_to_vehicle_odometer_page(FleetOdometerStepDefs.java:23)\r\n\tat ✽.Only valid userType  can access to vehicle odometer page(file:///C:/Users/greec/untitled1/src/test/resources/features/FleetOdometer.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});