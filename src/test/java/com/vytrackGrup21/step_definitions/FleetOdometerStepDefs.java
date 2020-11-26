package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class FleetOdometerStepDefs {



    @Then("Only valid userType  can access to vehicle odometer page")
    public void only_valid_userType_can_access_to_vehicle_odometer_page() throws InterruptedException {

        Dashboard dashboard = new Dashboard();
        BrowserUtils.waitFor(10);
        dashboard.navigateToModule("Fleet","Vehicle Odometer");
        Thread.sleep(5000);
        String DashboardActualTitle =  Driver.get().getTitle();

        if (DashboardActualTitle.equals("Dashboard")){

            Assert.assertTrue(!DashboardActualTitle.equals("\"Vehicle Odometer - Entities - System - Car - Entities - System\""));
            System.out.println("store manager did not access to odometer page");

        }else if (! DashboardActualTitle.equals("Dashboard"))

            Assert.assertEquals("Vehicle Odometer - Entities - System - Car - Entities - System",DashboardActualTitle);
            System.out.println("I verifed driver");
            Assert.assertEquals("You do not have permission to perform this action.",dashboard.NotPermission.getText());
    }

}
