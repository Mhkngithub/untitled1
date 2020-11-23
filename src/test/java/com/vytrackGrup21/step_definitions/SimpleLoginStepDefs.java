package com.vytrackGrup21.step_definitions;

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

    @When("Driver login with valid credantial")
    public void driver_login_with_valid_credantialH1() {
        LoginPage loginPage = new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
        BrowserUtils.waitFor(1);
        loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));
        loginPage.loginButton.click();
        //Bu da benim code
    }

    @Then("Driver Should see Dashboard page")
    public void driver_Should_see_Dashboard_pageH2() {

        //Dashboard dashboard = new Dashboard();
        System.out.println(Driver.get().getTitle());
        String actual =Driver.get().getTitle();
        Assert.assertEquals("Dashboard",actual);

    }


    @When("Sales Manager login with valid credantial")
    public void sales_Manager_login_with_valid_credantial() {

        LoginPage loginPage = new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("sales_manager_username"));
        BrowserUtils.waitFor(1);
        loginPage.password.sendKeys(ConfigurationReader.get("sales_manager_password"));
        loginPage.loginButton.click();
    }

    @Then("Sales Manager see Dashboard page")
    public void sales_Manager_see_Dashboard_page() {
        //Dashboard dashboard = new Dashboard();
        System.out.println(Driver.get().getTitle());
        String actual =Driver.get().getTitle();
        Assert.assertEquals("Dashboard",actual);

    }

    @When("Store Manager login with valid credantial")
    public void store_Manager_login_with_valid_credantial() {

        LoginPage loginPage = new LoginPage();
        loginPage.userName.sendKeys(ConfigurationReader.get("store_manager_username"));
        BrowserUtils.waitFor(1);
        loginPage.password.sendKeys(ConfigurationReader.get("store_manager_password"));
        loginPage.loginButton.click();

    }

    @Then("Store Manager see Dashboard page")
    public void store_Manager_see_Dashboard_page() {
        //Dashboard dashboard = new Dashboard();
        System.out.println(Driver.get().getTitle());
        String actual =Driver.get().getTitle();
        BrowserUtils.waitFor(1);
        Assert.assertEquals("Dashboard",actual);
    }

    @Then("Store Manager see Dashboard page")
    public void  cok_YANLIS1234_store_Manager_see_Dashboard_page() {
        //Dashboard dashboard = new Dashboard();
        System.out.println(Driver.get().getTitle());
        String actual =Driver.get().getTitle();
        BrowserUtils.waitFor(1);
        Assert.assertEquals("Dashboard",actual);
    }

// Lets try a commit and PUSH without UPDATE!

    public void WRONG_USER {

        String NEDEN = Reason;

    }




}
