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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027You do not have permission to perform this action\u0027)]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-G90EMVK2\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\greec\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54739}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b3233f8bdd895c5f19a397c9ada554f2\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027You do not have permission to perform this action\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.vytrackGrup21.step_definitions.FleetOdometerStepDefs.only_valid_userType_can_access_to_vehicle_odometer_page(FleetOdometerStepDefs.java:31)\r\n\tat ✽.Only valid userType  can access to vehicle odometer page(file:///C:/Users/greec/untitled1/src/test/resources/features/FleetOdometer.feature:9)\r\n",
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
