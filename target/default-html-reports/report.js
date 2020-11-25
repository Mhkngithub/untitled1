$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SalasManagerCreateVehicle.feature");
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
  "name": "\"userType\" press \"Fleet\" tab \"Vehicles\" module should be see all information",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.press_tab_module_should_be_see_all_information(java.lang.String,java.lang.String,java.lang.String,java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [{string} press {string} tab {string} module should be see all information] is defined with 4 parameters at \u0027com.vytrackGrup21.step_definitions.DriverAccessVehicleFleetStepDefs.press_tab_module_should_be_see_all_information(java.lang.String,java.lang.String,java.lang.String,java.util.List\u003cjava.lang.String\u003e)\u0027.\nHowever, the gherkin step has 3 arguments:\n * \"userType\"\n * \"Fleet\"\n * \"Vehicles\"\nStep text: \"userType\" press \"Fleet\" tab \"Vehicles\" module should be see all information\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});