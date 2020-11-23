package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class DriverAccessVehicleFleetStepDefs {

   Dashboard dashboard = new Dashboard();

    @Given("user on {string}")
    public void user_on(String string) {
        BrowserUtils.waitFor(2);
        Assert.assertEquals(string,Driver.get().getTitle());
    }


    @When("driver clic {string} tab and {string} module")
    public void driver_clic_tab_and_module(String tab, String module) {

        dashboard.navigateToModule(tab,module);

    }

    @Then("should be see all vehicle information on page")
    public void should_be_see_all_vehicle_information_on_page() {
        BrowserUtils.waitFor(2);
        System.out.println("burdayım");
    }




}
