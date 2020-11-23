package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.BasePage;
import com.vytrackGrup21.pages.LoginPage;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.ConfigurationReader;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;

public class loginPageStepDefs {




    @Given("user on the login page")
    public void user_on_the_login_page() {

        WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
        Driver.get().get(ConfigurationReader.get("url"));
        BrowserUtils.waitFor(2);


        //String url = ConfigurationReader.get("url");
        //WebDriver driver = Driver.get();
        //Driver.get().get(url);



    }


    @When("{string} login with valid {string} and {string}")
    public void login_with_valid_and(String userType , String userName, String password) {

        LoginPage loginPage = new LoginPage();


        if(userType.equals("driver")){
            BrowserUtils.waitFor(2);
            loginPage.userName.sendKeys(userName);
            loginPage.password.sendKeys(password);

        }else if(userType.equals("sales_manager")){
            BrowserUtils.waitFor(2);
            loginPage.userName.sendKeys(userName);
            loginPage.password.sendKeys(password);

        }else if(userType.equals("store_manager")){
            BrowserUtils.waitFor(2);
            loginPage.userName.sendKeys(userName);
            loginPage.password.sendKeys(password);
        }

        loginPage.loginButton.click();

    }


    @Then("the user should be able to login {string} page")
    public void the_user_should_be_able_to_login_page(String string) throws InterruptedException {

        Assert.assertEquals("user should be on Dashboard page", Driver.get().getTitle(),string);
        Thread.sleep(1000);


    }


    @When("{string} login with valid userName and password")
    public void login_with_valid_userName_and_password(String userType) {

        LoginPage loginPage = new LoginPage();


        if(userType.equals("driver")){
            BrowserUtils.waitFor(1);
            loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
            loginPage.password.sendKeys(ConfigurationReader.get("driver_password"));

        }else if(userType.equals("sales_manager")){
            BrowserUtils.waitFor(1);
            loginPage.userName.sendKeys(ConfigurationReader.get("sales_manager_username"));
            loginPage.password.sendKeys(ConfigurationReader.get("sales_manager_password"));

        }else if(userType.equals("store_manager")){
            BrowserUtils.waitFor(1);
            loginPage.userName.sendKeys(ConfigurationReader.get("store_manager_username"));
            loginPage.password.sendKeys(ConfigurationReader.get("store_manager_password"));
        }

        loginPage.loginButton.click();

    }




}




