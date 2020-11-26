package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

public class StoreManagerCreateVehicleStep_Defs {

    @Then("Store manager should be able to create and cancel car")
    public void store_manager_should_be_able_to_create_and_cancel_car() throws InterruptedException {
        Dashboard dashboard = new Dashboard();

        BrowserUtils.waitFor(9);
        dashboard.CreateCarButton.click();
        BrowserUtils.waitFor(5);

        Driver.get().manage().window().maximize();

        dashboard.LicancePlateBox.sendKeys("illa mustang istiyoruz");
        BrowserUtils.waitFor(4);

        dashboard.TagConvertableChosen.click();
        BrowserUtils.waitFor(3);
        System.out.println(dashboard.TagConvertableChosen.isSelected());

        dashboard.ImmatriculationDate.sendKeys("Jan 10, 2020");
        Thread.sleep(9000);
        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();

        jse.executeScript("window.scrollBy(0,200)");

        /*Select select = new Select(dashboard.Transmission);
        select.selectByValue("Automatic");
        System.out.println("selectObject:"+ select.getFirstSelectedOption().getText());
*/


        jse.executeScript("arguments[0].click()", dashboard.TransmissionBlok);

       // BrowserUtils.waitForClickablility(dashboard.TransmissionBlok, 15);
       // dashboard.TransmissionBlok.click();
        BrowserUtils.waitFor(5);
        dashboard.Automatic.click();
        BrowserUtils.waitFor(5);

        jse.executeScript("arguments[0].click()", dashboard.FeulType);
        //dashboard.FeulType.click();
        BrowserUtils.waitFor(2);
        dashboard.Hybrid.click();
        BrowserUtils.waitFor(5);

        jse.executeScript("arguments[0].click()", dashboard.saveAndSubmit);

        BrowserUtils.waitFor(5);
        jse.executeScript("arguments[0].click()", dashboard.saveEnd);
        BrowserUtils.waitFor(3);

        System.out.println("save notation:"+ dashboard.saveNotation.getText());
        Assert.assertEquals("Entity saved",dashboard.saveNotation.getText());

    }

    @Then("Store manager should be able to add Vehicle Module and Vehicle Make")
    public void store_manager_should_be_able_to_add_Vehicle_Module_and_Vehicle_Make() {

    }

    @Then("Store manager should be able to edit or delete the car")
    public void store_manager_should_be_able_to_edit_or_delete_the_car() {

    }


}
