package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

    @Before
    public void setUp() {
        System.out.println("\tthis is coming from BEFORE");
    }


    @After
    public void tearDown(Scenario scenario) {
        Driver.closeDriver();



    }

}