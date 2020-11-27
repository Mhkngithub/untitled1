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

        List<String> ActualTitleList =  BrowserUtils.getElementsText(dashboard.CostTitles);


     /*   int a= ActualTitleList.size();
        a=a/2;
        List<String>NewActual = new ArrayList<>();
        for (int i = 0; i < a; i++) {
          NewActual.add(ActualTitleList.get(i));

        }
*/

ActualTitleList.remove(5);
ActualTitleList.remove(4);
ActualTitleList.remove(3);

        System.out.println("Expected List:"+ ExpectedCostTitle);
        System.out.println("Actual List:"+ ActualTitleList);
        Assert.assertEquals(ExpectedCostTitle.toString().toLowerCase(),ActualTitleList.toString().toLowerCase());


    }

    @Then("fourth line should include these informations")
    public void fourth_line_should_include_these_informations(List<String> ExpectedFourthLine ) {

        Dashboard dashboard = new Dashboard();


        List<String> ActulFourthLine = BrowserUtils.getElementsText(dashboard.fourthLine);


        System.out.println("actual : " +ActulFourthLine.size());
        System.out.println("actual: "+ ActulFourthLine.toString());
        System.out.println("expected:"+ ExpectedFourthLine);

        Assert.assertEquals(ExpectedFourthLine,ActulFourthLine);

    }

    @Then("user should invoke page informations")
    public void user_should_invoke_page_informations() {

    }



}
