package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class FleetOdometerStepDefs {



    @Then("Only valid userType  can access to vehicle odometer page")
    public void only_valid_userType_can_access_to_vehicle_odometer_page() {

        Dashboard dashboard = new Dashboard();
        BrowserUtils.waitFor(8);
        dashboard.navigateToModule("Fleet","Vehicle Odometer");

        String DashboardActualTitle =  Driver.get().getTitle();

        try{
            Assert.assertEquals("Vehicle Odometer - Entities - System - Car - Entities - System",DashboardActualTitle);
            System.out.println("I verifed driver");
        }catch (Exception e){
            Assert.assertNotEquals("Vehicle Odometer - Entities - System - Car - Entities - System",DashboardActualTitle);
            System.out.println("store manager did not access to odometer page");


        }







    }


}
