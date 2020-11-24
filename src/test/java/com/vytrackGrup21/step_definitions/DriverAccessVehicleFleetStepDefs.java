package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.BasePage;
import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class DriverAccessVehicleFleetStepDefs {

  //  @When("{string} press {string} tab {string} module should be see all information")
  //  public void press_tab_module_should_be_see_all_information(String driver, String Fleet, String Vehicles) {

   // }
   @When("{string} press {string} tab {string} module should be see all information")
   public void press_tab_module_should_be_see_all_information(String driver, String tag, String module,
                                                              List<String> expectedColumnsName) throws InterruptedException {

        Dashboard dashboard =new Dashboard();
    dashboard.FleetTag.click();
    BrowserUtils.waitForVisibility(dashboard.VehiclesModule,1);
    dashboard.VehiclesModule.click();
    Thread.sleep(10000);

       //dashboard.navigateToModule(tag,module);

       System.out.println("sizewebelementlist:"+dashboard.ColumnsName.size());


       System.out.println("expected:"+expectedColumnsName);

        Thread.sleep(12000);
       List<String> actualColumnsName = BrowserUtils.getElementsText(new Dashboard().ColumnsName);

       System.out.println("actualStringSize:"+actualColumnsName.size());
       System.out.println("actual:"+actualColumnsName.toString());







   }





    @When("{string} click any car,should be display general information")
    public void click_any_car_should_be_display_general_information(String string) {

    }

    @When("{string} can add Event, it should display under Activity tab and General information page as well.")
    public void can_add_Event_it_should_display_under_Activity_tab_and_General_information_page_as_well(String string) {

    }

    @Then("{string} can reset the setting")
    public void can_reset_the_setting(String string) {

    }

}
