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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"submit\" class\u003d\"btn btn-success action-button\" data-action\u003d\"{\u0026quot;route\u0026quot;:\u0026quot;oro_entity_view\u0026quot;,\u0026quot;params\u0026quot;:{\u0026quot;entityName\u0026quot;:\u0026quot;Extend_Entity_Carreservation\u0026quot;,\u0026quot;id\u0026quot;:\u0026quot;$id\u0026quot;}}\" data-button-index\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1463, 137). Other element would receive the click: \u003cdiv id\u003d\"oro-dropdown-mask\" class\u003d\"oro-dropdown-mask\" style\u003d\"z-index: 2;\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.66)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BAIRO\u0027, ip: \u0027192.168.1.228\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.66, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: C:\\Users\\wcc-2\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62039}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5d8978d5c150427da7556145f92247f1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.vytrackGrup21.step_definitions.StoreManagerCreateVehicleStep_Defs.store_manager_should_be_able_to_create_and_cancel_car(StoreManagerCreateVehicleStep_Defs.java:53)\r\n\tat ✽.Store manager should be able to create and cancel car(file:///C:/Users/wcc-2/IdeaProjects/untitled/src/test/resources/features/StoreManagerCreateVehicle.feature:32)\r\n",
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