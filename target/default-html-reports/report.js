$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FleetOdometer.feature");
formatter.feature({
  "name": "As an authorized user I should be access to Vehicle odometer page.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sc0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As a \u003cuserType\u003e should be able to login",
  "description": "",
  "keyword": "Scenario Outline"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a driver should be able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc0"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"driver\" login with valid \"user169\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.login_with_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to login \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.the_user_should_be_able_to_login_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.scenario({
  "name": "As a store_manager should be able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc0"
    }
  ]
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"store_manager\" login with valid \"storemanager213\" and \"UserUser123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.login_with_valid_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to login \"Dashboard\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.loginPageStepDefs.the_user_should_be_able_to_login_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc4"
    }
  ]
});
formatter.step({
  "name": "Only valid \"\u003cuserType\u003e\" can access to vehicle odometer page",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType"
      ]
    },
    {
      "cells": [
        "driver"
      ]
    },
    {
      "cells": [
        "store manager"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc0"
    },
    {
      "name": "@Sc4"
    }
  ]
});
formatter.step({
  "name": "Only valid \"driver\" can access to vehicle odometer page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sc0"
    },
    {
      "name": "@Sc4"
    }
  ]
});
formatter.step({
  "name": "Only valid \"store manager\" can access to vehicle odometer page",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});