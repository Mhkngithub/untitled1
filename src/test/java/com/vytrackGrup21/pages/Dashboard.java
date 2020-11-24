package com.vytrackGrup21.pages;

import com.vytrackGrup21.utilities.BrowserUtils;
import com.vytrackGrup21.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class Dashboard extends BasePage{



    @FindBy (xpath = "//th")
    public List<WebElement> ColumnsName;

    @FindBy(xpath = "//span[@class='title title-level-1'][1]")
    public WebElement FleetTag;

    @FindBy(xpath = "//span[@class='title title-level-2'][1]")
    public WebElement VehiclesModule;

    @FindBy(xpath = "//tbody/tr[1]/td[2]")
    public WebElement ClickPoint;

    @FindBy(xpath = "//label")
    public List<WebElement>CarGeneralInformanion;


    public void navigateToModule (String tab, String module ){

        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + tab + "' and contains(@class, 'title title-level-1')]")).click();
                                           //span[normalize-space()='Vehicles' and contains(@class, 'title title-level-1') ]


        BrowserUtils.waitFor(3);
        Driver.get().findElement(By.xpath("//span[normalize-space(text())='" + module + "' and contains(@class, 'title title-level-2')]")).click();
        BrowserUtils.waitFor(1);
    }


}
