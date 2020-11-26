package com.vytrackGrup21.step_definitions;

import com.vytrackGrup21.pages.Dashboard;
import com.vytrackGrup21.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.List;

public class FleetCostPageStepDefs {

    @When("{string} log in page titles must be seen")
    public void log_in_page_titles_must_be_seen(String string, List<String>ExpectedCostTitle) {

        Dashboard dashboard = new Dashboard();
        dashboard.navigateToModule("Fleet","Vehicle Costs");


        BrowserUtils.waitForPageToLoad(8);

        List<String> ActualTitleList = BrowserUtils.getElementsText(dashboard.CostTitles);
        System.out.println("Expected List:"+ ExpectedCostTitle);
        System.out.println("Actual List:"+ ActualTitleList);
        Assert.assertEquals(ExpectedCostTitle.toString().toLowerCase(),ActualTitleList.toString().toLowerCase());


    }

    @Then("fourth line should include these informations")
    public void fourth_line_should_include_these_informations(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        throw new io.cucumber.java.PendingException();
    }

    @Then("user should invoke page informations")
    public void user_should_invoke_page_informations() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



}
