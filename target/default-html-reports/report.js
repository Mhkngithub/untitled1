$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DriverFleetVehiclesModule.feature");
formatter.feature({
  "name": "As a truck driver I should be able to access Vehicle under Fleet module.",
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
  "name": "Fleet tab Vehicle module",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sc2"
    }
  ]
});
formatter.step({
  "name": "\"userType\" press \"Fleet\" tab \"Vehicles\" module should be see all information",
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
  "name": "\"userType\" click any car,should be display general information",
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
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.click_any_car_should_be_display_general_information(java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ctd class\u003d\"string-cell grid-cell grid-body-cell grid-body-cell-LicensePlate\" data-column-label\u003d\"License Plate\"\u003e...\u003c/td\u003e is not clickable at point (55, 286). Other element would receive the click: \u003cdiv class\u003d\"control-group control-group-text\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d85.0.4183.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-G90EMVK2\u0027, ip: \u0027192.168.1.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\greec\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57391}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c06858012b50cf8519c5ba12c5a7601d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.click_any_car_should_be_display_general_information(DriverAccessVehicleFleetStepDefs.java:56)\r\n\tat ✽.\"userType\" click any car,should be display general information(file:///C:/Users/greec/untitled1/src/test/resources/features/DriverFleetVehiclesModule.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "\"userType\" can add Event, it should display under Activity tab and General information page as well.",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.can_add_Event_it_should_display_under_Activity_tab_and_General_information_page_as_well(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"userType\" can reset the setting",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.can_reset_the_setting(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});