package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.pages.LoginPage;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.ConfigurationReader;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class SimpleLoginStepDefs {

    @When("Driver login with valid credantial")
    public void driver_login_with_valid_credantial() {
        LoginPage loginPage = new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
        BrowserUtils.waitFor(1);
        loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));
        loginPage.loginButton.click();
    }

    @Then("Driver Should see Dashboard page")
    public void driver_Should_see_Dashboard_page() {

        //Dashboard dashboard = new Dashboard();
        System.out.println(Driver.get().getTitle());
        String actual =Driver.get().getTitle();
        Assert.assertEquals("Dashboard",actual);
    }



}
