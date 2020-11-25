package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.AddEventPage;
import com.vytrackGrup21.pages.BasePage;
import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import javax.swing.*;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class DriverAccessVehicleFleetStepDefs {


   @When("{string} press {string} tab {string} module should be see all information")
   public void press_tab_module_should_be_see_all_information(String driver, String tag, String module,
                                                              List<String> expectedColumnsName) throws InterruptedException {

        Dashboard dashboard =new Dashboard();
        Thread.sleep(12000);
    dashboard.FleetTag.click();
    //BrowserUtils.waitForVisibility(dashboard.VehiclesModule,3);
    Thread.sleep(7000);
    dashboard.VehiclesModule.click();
    Thread.sleep(7000);

      // dashboard.navigateToModule(tag,module);

      /* System.out.println("sizewebelementlist:"+dashboard.ColumnsName.size());


       System.out.println("expected:"+expectedColumnsName);

        Thread.sleep(2000);
       List<String> actualColumnsName = BrowserUtils.getElementsText(new Dashboard().ColumnsName);

       System.out.println("actualStringSize:"+actualColumnsName.size());
       System.out.println("actual:"+actualColumnsName.toString());

    //Assert.assertEquals(expectedColumnsName,actualColumnsName);

       */

   }

    @When("{string} click any car,should be display general information")
    public void click_any_car_should_be_display_general_information(String string,List<String>expectedCarGeneralInformtion) throws InterruptedException {

       Dashboard dashboard = new Dashboard();
       BrowserUtils.waitFor(5);
       dashboard.ClickPoint.click();
       Thread.sleep(10000);

       /* System.out.println("expected:"+expectedCarGeneralInformtion.size());
        System.out.println(expectedCarGeneralInformtion.toString());
        BrowserUtils.waitFor(6);

        List<String> actualCarGenerlInformation = BrowserUtils.getElementsText(dashboard.CarGeneralInformanion);

        System.out.println("actual List size: "+ actualCarGenerlInformation.size());

        Assert.assertEquals(expectedCarGeneralInformtion,actualCarGenerlInformation);
        System.out.println("actualCarGeneralInformtion size :"+ actualCarGenerlInformation.size());
        System.out.println("actual:"+actualCarGenerlInformation.toString());
*/
    }

    @When("{string} can add Event, it should display under Activity tab and General information page as well.")
    public void can_add_Event_it_should_display_under_Activity_tab_and_General_information_page_as_well(String string) {

        AddEventPage addEventPage = new AddEventPage();
       addEventPage.AddEventButton.click();
       BrowserUtils.waitFor(7);

       addEventPage.EventTitle.sendKeys("Mustang alıyoruz");
       addEventPage.EventDescription.sendKeys("Mustangı  fıstık yesılı alacagız");
       addEventPage.EventColor.click();
       addEventPage.EventGuest.click();
    /*   BrowserUtils.waitFor(2);
        Actions action = new Actions(Driver.get());
        BrowserUtils.waitFor(2);
        action.moveToElement(dashboard.EventGuestDriverTruck).perform();
        dashboard.EventRemanderAdd.click();
        new Select(dashboard.EventRemanderAddMail).getFirstSelectedOption().click();
        BrowserUtils.waitFor(1);
        dashboard.EventRemanderMinuteBox.sendKeys("10");
        new Select(dashboard.EventRemanderAddMinute).getFirstSelectedOption().click();
        BrowserUtils.waitFor(1);

*/

    }

    @Then("{string} can reset the setting")
    public void can_reset_the_setting(String string) {

    }

}
