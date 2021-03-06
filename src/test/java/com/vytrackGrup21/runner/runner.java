package com.vytrackGrup21.runner;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                "rerun:target/rerun.txt"},
        features = "src/test/resources/features",
        glue = "com/vytrackGrup21/step_definitions",
        dryRun = false,
        tags ="@Smp2"
)
public class runner {
}






