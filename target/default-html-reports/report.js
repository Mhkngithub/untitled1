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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "Store manager should be able to create and cancel car",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_create_and_cancel_car()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027btn main-group btn-primary pull-right \u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-G90EMVK2\u0027, ip: \u0027192.168.1.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\greec\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49499}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a2273acee77e264b995f35a06047281a\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027btn main-group btn-primary pull-right \u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_create_and_cancel_car(StoreManagerCreateVehicleStep_Defs.java:17)\r\n\tat ✽.Store manager should be able to create and cancel car(file:///C:/Users/greec/untitled1/src/test/resources/features/StoreManagerCreateVehicle.feature:32)\r\n",
  "status": "failed"
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