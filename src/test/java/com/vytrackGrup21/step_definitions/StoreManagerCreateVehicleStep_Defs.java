package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.openqa.selenium.support.ui.Select;

public class StoreManagerCreateVehicleStep_Defs {

    @Then("Store manager should be able to create and cancel car")
    public void store_manager_should_be_able_to_create_and_cancel_car() throws InterruptedException {
        Dashboard dashboard = new Dashboard();

        BrowserUtils.waitFor(5);
        dashboard.CreateCarButton.click();
        BrowserUtils.waitFor(5);

        dashboard.LicancePlateBox.sendKeys("illa mustang istiyporuz");
        BrowserUtils.waitFor(4);

        dashboard.TagConvertableChosen.click();
        BrowserUtils.waitFor(3);
        System.out.println(dashboard.TagConvertableChosen.isSelected());

        dashboard.ImmatriculationDate.sendKeys("Jan 10, 2020");
        Thread.sleep(5000);

        Select select = new Select(dashboard.Transmission);
        select.selectByValue("Automatic");
        System.out.println("selectObject:"+ select.getFirstSelectedOption().getText());




    }

    @Then("Store manager should be able to add Vehicle Module and Vehicle Make")
    public void store_manager_should_be_able_to_add_Vehicle_Module_and_Vehicle_Make() {

    }

    @Then("Store manager should be able to edit or delete the car")
    public void store_manager_should_be_able_to_edit_or_delete_the_car() {

    }


}
